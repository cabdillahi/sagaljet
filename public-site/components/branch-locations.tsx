"use client"

import { motion } from "framer-motion"
import { branches } from "@/lib/contact-data"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function BranchLocations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6">Our Locations</h2>

      {branches.map((branch, index) => (
        <motion.div
          key={branch.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-4">{branch.name}</h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{branch.address}</p>
                <p className="text-muted-foreground">{branch.city}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">
                {branch.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a href={`mailto:${branch.email}`} className="hover:text-primary transition-colors">
                {branch.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">{branch.hours}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
