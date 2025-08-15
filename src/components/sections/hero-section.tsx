import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Hero Content */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Empower Your Learning Through{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Collaboration
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Join সহজPath - a vibrant community where students connect to share notes and
              insights. Collaborate effectively and enhance your academic journey
              today!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base bg-blue-600 text-white">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="group relative overflow-hidden rounded-xl bg-muted shadow-2xl">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
                alt="Platform Demo Video"
                width={800}
                height={450}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
              <button className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-110">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
                  <Play className="ml-1 h-8 w-8 text-gray-900" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
