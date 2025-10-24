"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Eye, Award, Users, Globe, TrendingUp } from "lucide-react";
import { SchemaOrg } from "@/components/schema-org";
import { breadcrumbSchema } from "@/lib/schema-data";
import Image from "next/image";
import useSWR from "swr";
import { Url } from "@/lib/url";

export interface DataItem {
  id: number;
  name: string;
  createAt: string;
  order: number | null;
  imageUrl: string;
  skill: string;
  description: string;
}

export interface DataResponse {
  result: DataItem[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide exceptional printing services that exceed expectations, combining innovation with reliability to serve businesses and individuals across Somaliland.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading printing company in the region, recognized for quality, innovation, and customer satisfaction while expanding our reach and capabilities.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We maintain the highest standards in every project, using state-of-the-art equipment and premium materials to deliver outstanding results.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your success is our priority. We work closely with clients to understand their needs and deliver solutions that drive their business forward.",
  },
  {
    icon: Globe,
    title: "Wide Reach",
    description:
      "With branches across Somaliland and Djibouti, we're positioned to serve you wherever you are with consistent quality and service.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We invest in the latest technology and training to stay ahead of industry trends and provide cutting-edge printing solutions.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Foundation",
    description:
      "SagalJet was established in Hargeisa with a vision to revolutionize printing services in Somaliland.",
  },
  {
    year: "2012",
    title: "Expansion",
    description:
      "Opened branches in Burao and Berbera, extending our reach across the region.",
  },
  {
    year: "2016",
    title: "Technology Upgrade",
    description:
      "Invested in state-of-the-art digital printing equipment to enhance quality and efficiency.",
  },
  {
    year: "2020",
    title: "Regional Growth",
    description:
      "Expanded to Las'anod, Cerigabo, Wajale, and Djibouti, becoming a truly regional printing leader.",
  },
  {
    year: "2024",
    title: "Innovation Leader",
    description:
      "Recognized as the premier printing company in Somaliland with over 10,000 satisfied clients.",
  },
];

export default function AboutClientPage() {
  const { data, error, isLoading } = useSWR<DataResponse>(
    `${Url}/teams/all`,
    fetcher
  );

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://sagaljet.net" },
    { name: "About", url: "https://sagaljet.net/about" },
  ]);

  const teamMembers = data?.result
    ? [...data.result].sort((a, b) => {
        if (a.order === null) return 1;
        if (b.order === null) return -1;
        return a.order - b.order;
      })
    : [];

  return (
    <>
      <SchemaOrg schema={breadcrumbs} />

      <div className="flex flex-col">
        <PageHeader
          title="About SagalJet"
          description="Leading the printing industry with quality, innovation, and dedication"
          imageSrc="/modern-printing-press-facility.jpg"
        />

        {/* Company Story */}
        <section className="py-20 lg:px-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-balance"
              >
                Our Story
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed text-pretty"
              >
                Since our founding, SagalJet has been committed to delivering
                exceptional printing services that help businesses and
                individuals bring their visions to life. With over 15 years of
                experience, we&apos;ve grown from a single location in Hargeisa
                to a network of branches serving clients across Somaliland and
                beyond.
              </motion.p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-[#422f7e] flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                A timeline of growth, innovation, and commitment to excellence
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#e20613]" />
                  <div className="text-sm font-bold text-[#422f7e] mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Behind every successful print job is a dedicated team of
                professionals committed to excellence. Meet the experts who make
                SagalJet the leading printing company in the region.
              </p>
            </motion.div>

            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#422f7e] border-r-transparent"></div>
                <p className="mt-4 text-muted-foreground">
                  Loading team members...
                </p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-500">
                  Failed to load team members. Please try again later.
                </p>
              </div>
            )}

            {/* Team Members Grid */}
            {!isLoading && !error && teamMembers.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative aspect-square overflow-hidden bg-white"
                      >
                        <Image
                          src={member.imageUrl || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-3xl p-2 transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#422f7e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl mb-1">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-[#e20613] font-medium">
                          {member.skill}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
