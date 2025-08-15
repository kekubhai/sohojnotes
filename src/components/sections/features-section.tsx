import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Gift } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Hire talented writers or offer your own note-writing services easily.",
    description: "Our platform connects students for seamless note sharing and collaboration.",
    linkText: "Learn More",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Explore a vast library of notes tailored to your study needs.",
    description: "Discover notes on trending subjects and enhance your learning experience.",
    linkText: "Explore",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Gift,
    title: "Take advantage of exclusive brand deals to save on educational resources.",
    description: "Join our community and access special offers from top brands.",
    linkText: "Deals",
    gradient: "from-green-500 to-teal-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Unlock the power of collaboration with our innovative note-sharing platform
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50 shadow-md transition-all hover:shadow-xl">
              <CardContent className="p-8">
                {/* Feature Image */}
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt={`${feature.linkText} feature`}
                    width={400}
                    height={240}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Feature Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradient}`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Feature Content */}
                <h3 className="mb-3 text-xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {feature.description}
                </p>

                {/* Feature Link */}
                <Button
                  variant="ghost"
                  className="group/button h-auto p-0 text-primary hover:bg-transparent"
                >
                  {feature.linkText}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
