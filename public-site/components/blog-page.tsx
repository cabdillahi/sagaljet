"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import useSWR from "swr"
import type { BlogPost } from "@/lib/blog-data"
import { Url } from "@/lib/url"

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Failed to fetch")
  const data = await response.json()

  // Transform API data to BlogPost format
  if (!data.isSuccess || !data.result) return []

  return data.result.map((blog: any) => ({
    id: blog.id,
    slug: blog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    title: blog.title,
    excerpt: blog.description || "Read more about this topic...",
    content: blog.content || blog.description || "",
    author: blog.author,
    date: blog.createAt,
    readTime: `${Math.ceil((blog.content || blog.description || "").split(/\s+/).length / 200)} min read`,
    category: blog.category || "General",
    image: blog.image,
  }))
}

export default function BlogPage() {
  const { data: posts, error, isLoading } = useSWR<BlogPost[]>(`${Url}/blog/all-blogs`, fetcher)

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="h-full flex flex-col animate-pulse">
                  <div className="h-48 bg-muted rounded-t-lg" />
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-20 mb-2" />
                    <div className="h-6 bg-muted rounded w-full" />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
          </div>
        </section>
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">No blog posts available at the moment.</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 text-balance">{post.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3 leading-relaxed">{post.excerpt}</CardDescription>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground w-full">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
