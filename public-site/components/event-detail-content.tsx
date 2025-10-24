"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Mail } from "lucide-react"
import type { Event } from "@/lib/events-data"

interface EventDetailContentProps {
  event: Event
}

export default function EventDetailContent({ event }: EventDetailContentProps) {
  const eventDate = new Date(event.date)
  const isPast = eventDate < new Date()

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg shadow-lg p-8 md:p-12"
          >
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </Button>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge>{event.category}</Badge>
              {event.registrationRequired && <Badge variant="outline">Registration Required</Badge>}
              {isPast && <Badge variant="secondary">Past Event</Badge>}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">{event.title}</h1>

            {/* Event Details Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#2f3292] dark:text-[#e20613] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Date</div>
                      <div className="text-sm text-muted-foreground">
                        {eventDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#2f3292] dark:text-[#e20613] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Time</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#2f3292] dark:text-[#e20613] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Location</div>
                      <div className="text-sm text-muted-foreground">{event.location}</div>
                    </div>
                  </div>

                  {event.capacity && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#2f3292] dark:text-[#e20613] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm mb-1">Capacity</div>
                        <div className="text-sm text-muted-foreground">Limited to {event.capacity} participants</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              {event.fullDescription.split("\n\n").map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }

                // Handle lists
                if (paragraph.includes("- **") || paragraph.includes("- ")) {
                  const items = paragraph.split("\n")
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4">
                      {items.map((item, i) => {
                        const text = item.replace(/^-\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        return <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                      })}
                    </ul>
                  )
                }

                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }

                return null
              })}
            </div>

            {/* Registration CTA */}
            {!isPast && (
              <div className="bg-gradient-to-br from-[#2f3292] to-[#e20613] rounded-lg p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{event.registrationRequired ? "Register Now" : "Join Us"}</h3>
                <p className="mb-6 text-white/90">
                  {event.registrationRequired
                    ? "Secure your spot today. Limited availability!"
                    : "No registration required. Just show up and join us!"}
                </p>
                <Button asChild size="lg" className="bg-white text-[#2f3292] hover:bg-white/90">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us to Register
                  </Link>
                </Button>
              </div>
            )}

            {/* Organizer Info */}
            <div className="mt-8 pt-8 border-t text-sm text-muted-foreground">
              <p>
                <strong>Organized by:</strong> {event.organizer}
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
