import { notFound } from "next/navigation"
import { getEvent, getAllEvents } from "@/lib/events-data"
import EventDetailContent from "@/components/event-detail-content"
import type { Metadata } from "next"
import { SchemaOrg } from "@/components/schema-org"
import { createEventSchema, breadcrumbSchema } from "@/lib/schema-data"

interface EventDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const events = getAllEvents()
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEvent(slug)

  if (!event) {
    return {
      title: "Event Not Found",
    }
  }

  return {
    title: `${event.title} | SagalJet Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "website",
      images: [
        {
          url: event.image || "/events-header.jpg",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image || "/events-header.jpg"],
    },
  }
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params
  const event = getEvent(slug)

  if (!event) {
    notFound()
  }

  const eventSchema = createEventSchema(event)
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://sagaljet.net" },
    { name: "Events", url: "https://sagaljet.net/events" },
    { name: event.title, url: `https://sagaljet.net/events/${event.slug}` },
  ])

  return (
    <>
      <SchemaOrg schema={eventSchema} />
      <SchemaOrg schema={breadcrumbs} />
      <EventDetailContent event={event} />
    </>
  )
}
