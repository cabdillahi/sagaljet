"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import { Input } from "@/components/ui/input";
import { SchemaOrg } from "@/components/schema-org";
import {
  CreditCard,
  FileText,
  ImageIcon,
  Tag,
  Package,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema-data";
import { serviceCategories, services } from "@/lib/services-data";

const iconMap = {
  CreditCard,
  FileText,
  Image: ImageIcon,
  Tag,
  Package,
  Mail,
};

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://sagaljet.net" },
    { name: "Services", url: "https://sagaljet.net/services" },
  ]);

  //   const servicesSchema = services.map((service) =>
  //     serviceSchema({
  //       name: service.title,
  //       description: service.description,
  //       provider: "Sagaljet Printing",
  //       serviceType: service.category,
  //     })
  //   );

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Services" ||
      service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      {/* <SchemaOrg schema={[breadcrumbs, ...servicesSchema]} /> */}

      <div className="flex flex-col min-h-screen">
        <PageHeader
          title="Our Services"
          description="Professional printing solutions tailored to your needs. From business cards to large format banners, we deliver quality that speaks for itself."
          imageSrc="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg"
        />

        {/* Search and Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {serviceCategories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#422f7e] text-white shadow-lg shadow-[#422f7e]/30"
                        : "bg-background border border-border hover:border-[#422f7e]/50 hover:bg-[#422f7e]/5"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-muted-foreground mt-4"
              >
                Showing {filteredServices.length}{" "}
                {filteredServices.length === 1 ? "service" : "services"}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {filteredServices.map((service) => {
                const IconComponent =
                  iconMap[service.icon as keyof typeof iconMap];

                return (
                  <motion.div key={service.id} variants={cardVariants}>
                    <Card className="h-full flex flex-col group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-[#422f7e]/30">
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#422f7e]/90 via-[#422f7e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={false}
                        />

                        {/* Floating Icon */}
                        <motion.div
                          className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-6 h-6 text-[#422f7e]" />
                          )}
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-[#e20613] hover:bg-[#e20613]/90 text-white shadow-lg">
                            {service.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-2xl group-hover:text-[#422f7e] transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1">
                        {/* Features List */}
                        <ul className="space-y-2 mb-4">
                          {service.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#422f7e] mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                        </ul>

                        {/* Pricing and Turnaround */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <p className="text-2xl font-bold text-[#422f7e]">
                              {service.startingPrice}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Starting price
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-[#e20613]">
                              <Clock className="h-4 w-4" />
                              <span className="text-sm font-semibold">
                                {service.turnaround}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Turnaround
                            </p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Button
                          asChild
                          className="w-full bg-[#422f7e] hover:bg-[#422f7e]/90 text-white group/btn"
                        >
                          <Link href={`/services/${service.slug}`}>
                            Learn More
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

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No services found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Services");
                  }}
                  className="border-[#422f7e] text-[#422f7e] hover:bg-[#422f7e] hover:text-white"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#422f7e]/5 via-background to-[#e20613]/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Get in touch with our team to discuss your printing needs and
                receive a custom quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#422f7e] hover:bg-[#422f7e]/90 text-white px-8 py-6 text-lg shadow-lg shadow-[#422f7e]/30"
                  >
                    Get a Quote
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#422f7e] text-[#422f7e] hover:bg-[#422f7e] hover:text-white px-8 py-6 text-lg bg-transparent"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
