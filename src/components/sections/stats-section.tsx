import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "3000+",
    description: "of students report improved grades through our services.",
    color: "text-green-600",
  },
  {
    icon: Users,
    number: "5000+",
    description: "Notes written by our talented community",
    color: "text-blue-600",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">
                Stats
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Discover Our Growing Community of Students
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Join thousands of students collaborating and sharing notes. Our
              platform empowers you to connect, learn, and succeed together.
            </p>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    <span className={`text-3xl font-bold ${stat.color}`}>
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Learn More</Button>
              <Button variant="ghost" className="group justify-start p-0">
                Explore
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-muted shadow-xl">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Community collaboration"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
