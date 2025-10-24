"use client"

import { motion } from "framer-motion"
import { branches } from "@/lib/contact-data"

export function ContactMap() {
  // Calculate center point of all branches
  const centerLat = branches.reduce((sum, b) => sum + b.coordinates.lat, 0) / branches.length
  const centerLng = branches.reduce((sum, b) => sum + b.coordinates.lng, 0) / branches.length

  // Create markers parameter for Google Maps
  const markers = branches
    .map((b) => `markers=color:red%7Clabel:${b.name.charAt(0)}%7C${b.coordinates.lat},${b.coordinates.lng}`)
    .join("&")

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${centerLat},${centerLng}&zoom=11&size=1200x400&maptype=roadmap&${markers}&key=YOUR_API_KEY`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold mb-6">Find Us on the Map</h2>

      <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden border border-border">
        {/* Fallback map visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold mb-2">Interactive Map</p>
              <p className="text-sm text-muted-foreground max-w-md">
                Visit our locations across New York City. Click on any branch above to get directions.
              </p>
            </div>
          </div>
        </div>

        {/* Grid overlay for visual effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>

        {/* Location markers */}
        {branches.map((branch, index) => (
          <motion.div
            key={branch.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="absolute"
            style={{
              left: `${20 + index * 30}%`,
              top: `${40 + (index % 2) * 20}%`,
            }}
          >
            <div className="relative group">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <span className="text-accent-foreground font-bold text-sm">{branch.name.charAt(0)}</span>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-popover text-popover-foreground px-3 py-2 rounded-md shadow-lg whitespace-nowrap text-sm border border-border">
                  <p className="font-semibold">{branch.name}</p>
                  <p className="text-xs text-muted-foreground">{branch.city}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        Note: This is a visual representation. For precise directions, please use your preferred navigation app.
      </p>
    </motion.div>
  )
}
