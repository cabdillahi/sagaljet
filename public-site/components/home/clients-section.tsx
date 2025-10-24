"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Url } from "@/lib/url"

export interface Client {
  id: number
  name: string
  description: string
  logoUrl: string
  createAt: string
  updateAt: string
}

export interface ClientResponse {
  result: Client[]
  success: boolean
}

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const [logos, setLogos] = useState<{ name: string; image: string; description: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${Url}/client/all`)
        const data: ClientResponse = await response.json()

        if (data.success && data.result) {
          const clientLogos = data.result.map((client) => ({
            name: client.name,
            image: client.logoUrl,
            description: client.description,
          }))
          setLogos(clientLogos)
        } else {
          setError(true)
        }
      } catch (err) {
        console.error("[v0] Failed to fetch clients:", err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchClients()
  }, [])

  const tripleLogos = [...logos, ...logos, ...logos]

  if (isLoading) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="text-muted-foreground">Loading clients...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="text-destructive">Failed to load clients</div>
        </div>
      </div>
    )
  }

  if (logos.length === 0) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="text-muted-foreground">No clients available</div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-6 sm:py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center whitespace-nowrap animate-logo-scroll-mobile sm:animate-logo-scroll-tablet lg:animate-logo-scroll-desktop">
          {tripleLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center inline-bloc"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: (index % logos.length) * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <div className="group relative">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-xl sm:rounded-2xl bg-background dark:bg-muted border border-border shadow-lg transition-all duration-300 group-hover:shadow-2xl flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={logo.description || `${logo.name} logo`}
                    width={120}
                    height={120}
                    className="w-full h-full grayscale group-hover:grayscale-0 object-contain transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
