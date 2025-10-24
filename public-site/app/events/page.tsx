"use client";

import { motion, useInView, Variant } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import PageHeader from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { getAllEvents } from "@/lib/events-data";
import { SchemaOrg } from "@/components/schema-org";
import { breadcrumbSchema } from "@/lib/schema-data";

export default function EventsPage() {
  const events = getAllEvents();
  const now = new Date();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://sagaljet.net" },
    { name: "Events", url: "https://sagaljet.net/events" },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbs} />

      <div className="flex flex-col">
        <PageHeader
          title="Events & Workshops"
          description="Join us for industry events, workshops, and networking opportunities"
          imageSrc="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
        />

        <section className="py-20" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {events.map((event) => {
                const eventDate = new Date(event.date);
                const isPast = eventDate < now;

                return (
                  <motion.div key={event.slug} variants={cardVariants}>
                    <Card
                      className={`h-full flex flex-col group hover:shadow-xl transition-all duration-300 ${
                        isPast ? "opacity-90" : ""
                      }`}
                    >
                      <div className="relative h-64 overflow-hidden rounded-t-lg">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#422f7e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                        {isPast && (
                          <motion.div
                            className="absolute top-4 right-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Badge variant="secondary" className="shadow-lg">
                              Past Event
                            </Badge>
                          </motion.div>
                        )}
                      </div>

                      <CardHeader>
                        <motion.div
                          className="flex items-center gap-2 mb-2 flex-wrap"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Badge className="bg-[#422f7e] hover:bg-[#422f7e]/90 text-white">
                            {event.category}
                          </Badge>
                          {event.registrationRequired && (
                            <Badge
                              variant="outline"
                              className="border-[#e20613] text-[#e20613]"
                            >
                              Registration Required
                            </Badge>
                          )}
                        </motion.div>
                        <CardTitle className="text-2xl text-balance group-hover:text-[#422f7e] transition-colors duration-300">
                          {event.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <CardDescription className="mb-4 leading-relaxed">
                          {event.description}
                        </CardDescription>

                        <motion.div
                          className="space-y-2 text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-[#422f7e] transition-colors duration-300">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-[#422f7e] transition-colors duration-300">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-[#422f7e] transition-colors duration-300">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          {event.capacity && (
                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-[#422f7e] transition-colors duration-300">
                              <Users className="h-4 w-4 flex-shrink-0" />
                              <span>
                                Limited to {event.capacity} participants
                              </span>
                            </div>
                          )}
                        </motion.div>
                      </CardContent>

                      <CardFooter>
                        <Button
                          asChild
                          className="w-full bg-[#422f7e] hover:bg-[#422f7e]/90 text-white group/btn"
                          disabled={isPast}
                        >
                          <Link href={`/events/${event.slug}`}>
                            {isPast ? "View Details" : "Learn More"}
                            <motion.span
                              className="ml-2 inline-block"
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
