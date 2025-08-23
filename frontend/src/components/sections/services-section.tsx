import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PenTool, Search, UserPlus } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Hire a Writer for Custom Note-Taking Services",
    description: "Get personalized notes from talented peers who understand your study requirements.",
    linkText: "Learn More",
    accent: "bg-blue-500",
  },
  {
    icon: Search,
    title: "Explore a Diverse Range of Note-Taking Services", 
    description: "Browse through various subjects and find the notes that suit your learning style.",
    linkText: "Explore",
    accent: "bg-purple-500",
  },
  {
    icon: UserPlus,
    title: "Join Our Community of Writers and Learners",
    description: "Become a part of our vibrant community and start sharing your expertise.",
    linkText: "Sign Up",
    accent: "bg-green-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Unlock Your Potential with Our Student-Centric Collaboration Services
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Our Note Writing Service connects students with skilled writers to
              create high-quality notes tailored to their needs. Whether you need
              comprehensive study materials or quick summaries, our platform makes
              it easy to find the perfect notes.
            </p>
            <p className="text-muted-foreground">
              Experience the ease of collaboration and elevate your learning today!
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group h-full overflow-hidden border-0 bg-background shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="overflow-hidden">
                  <Image
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt={service.title}
                    width={400}
                    height={240}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  {/* Service Icon */}
                  <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${service.accent}`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="mb-3 text-xl font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Service Link */}
                  <Button
                    variant="ghost"
                    className="group/button h-auto p-0 text-primary hover:bg-transparent"
                  >
                    {service.linkText}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
