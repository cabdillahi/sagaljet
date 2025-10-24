"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";
import { Url } from "@/lib/url";

export interface Client {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  createAt: string;
  updateAt: string;
}

export interface ClientResponse {
  result: Client[];
  success: boolean;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { data, error, isLoading } = useSWR<ClientResponse>(
    `${Url}/client/all`,
    fetcher
  );

  const logos =
    data?.result?.map((client) => ({
      name: client.name,
      image: client.logoUrl,
      description: client.description,
    })) || [];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  if (isLoading) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="text-muted-foreground">Loading clients...</div>
        </div>
      </div>
    );
  }

  if (error || !data?.success) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="text-destructive">Failed to load clients</div>
        </div>
      </div>
    );
  }

  if (logos.length === 0) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="text-muted-foreground">No clients available</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16 items-center"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >


          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
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
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl bg-background dark:bg-muted border border-border shadow-lg transition-all duration-300 group-hover:shadow-2xl flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={logo.description || `${logo.name} logo`}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
