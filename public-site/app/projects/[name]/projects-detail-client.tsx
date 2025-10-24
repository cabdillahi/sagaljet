"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Building2,
  Briefcase,
  ExternalLink,
  User,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[50vh] min-h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={
              project.imageUrl[0] || "/placeholder.svg?height=1080&width=1920"
            }
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      <div className="relative -mt-32 z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto"
        >
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-8 md:p-12 lg:p-16">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <Button
                  asChild
                  variant="ghost"
                  className="text-foreground hover:bg-muted -ml-4"
                >
                  <Link href="/designs">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              </motion.div>

              {/* Metadata Row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8 text-sm"
              >
                <Badge className="bg-foreground text-background hover:bg-foreground/90 px-3 py-1 rounded-md">
                  {project.category.name}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(project.createAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{project.client}</span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground mb-6"
              >
                {project.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed prose prose-sm md:prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content - Images Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Project Gallery
                </h2>

                {/* Additional Images Grid */}
                {project.imageUrl.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {project.imageUrl.slice(1).map((url, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg group"
                      >
                        <Image
                          src={url || "/placeholder.svg"}
                          alt={`${project.name} - Image ${index + 2}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Category Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8"
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">
                        About {project.category.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Sidebar - Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Project Information Card */}
              <Card className="sticky top-6">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Project Details
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 pb-4 border-b border-border">
                        <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Client</p>
                          <p className="text-sm text-muted-foreground">
                            {project.client}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pb-4 border-b border-border">
                        <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Industry</p>
                          <p className="text-sm text-muted-foreground">
                            {project.industry}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pb-4 border-b border-border">
                        <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Completed</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(project.createAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">Category</p>
                          <p className="text-sm text-muted-foreground">
                            {project.category.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Project Button */}
                  {project.link && (
                    <Button asChild className="w-full" size="lg">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Project
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
