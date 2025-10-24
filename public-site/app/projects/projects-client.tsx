"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import type { Project, Category } from "@/lib/types";
import PageHeader from "@/components/page-header";

interface ProjectsClientProps {
  projects: Project[];
  categories: Category[];
}

export default function ProjectsClient({
  projects,
  categories,
}: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      project.categoryId === Number.parseInt(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-br from-[#422f7e] to-[#e20613] text-white py-16">
        <PageHeader
          title="Featured Projects"
          description="Explore our diverse range of designs and printing solutions. From eye-catching business cards to stunning banners, we bring your vision to life with quality craftsmanship and attention to detail."
          imageSrc="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground mb-6"
        >
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </motion.p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 w-full  overflow-hidden rounded-t-lg px-4 py-2">
                  <Image
                    src={
                      project.imageUrl[0] ||
                      "/placeholder.svg?height=400&width=600"
                    }
                    alt={project.name}
                    fill
                    className="object-cover px-4 py-3   transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-3xl"
                  />
                  <Badge className="absolute top-3 right-3 bg-[#422f7e] text-white hover:bg-[#422f7e]/90">
                    {project.category.name}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {project.industry}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.client}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-[#422f7e] hover:bg-[#422f7e]/90 text-white"
                  >
                    <Link href={`/projects/${encodeURIComponent(project.name)}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No projects found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
