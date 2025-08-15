'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#e0f4ff] py-16 lg:py-24">
      {/* Floating notes decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-80 rotate-12 bg-white rounded-md shadow-sm p-4 w-32 h-40"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 70 + 15}%`,
              transform: `rotate(${Math.random() * 40 - 20}deg)`,
              animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="h-2 bg-gray-200 rounded mb-2 w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded mb-2"></div>
            <div className="h-2 bg-gray-200 rounded mb-2 w-5/6"></div>
            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Main content - Left & Center */}
          <div className="lg:w-3/5 z-10 mb-10 lg:mb-0">
            <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002a51]">
                Get Notes Written. Share Knowledge. Earn Money
              </h1>
              <p className="mt-6 text-lg text-[#1a466b]">
                A peer-to-peer platform for students to exchange notes,
                explore topics, and collaborate
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-[#003566] hover:bg-[#002a51] text-white font-semibold px-8 py-6 text-lg rounded-full"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-[#003566] text-[#003566] hover:bg-[#003566] hover:text-white font-semibold px-6 py-2 flex items-center gap-2 rounded-full"
                >
                  <User size={20} />
                  <span>Check testimonials</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side image & stats */}
          <div className="lg:w-2/5 relative z-10">
            {/* Student image */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <Image
                src="/hero.png"
                alt="Happy student with notes"
                width={400}
                height={500}
                className="rounded-lg mx-auto"
                priority
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src =
                    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";
                }}
              />
            </div>

            {/* Stats boxes */}
            <div className="absolute -bottom-4 -left-12 bg-[#003566] text-white p-6 rounded-lg shadow-lg max-w-[240px]">
              <h3 className="text-lg font-semibold mb-1">
                From Notes to Knowledge
              </h3>
              <p className="text-sm">We Empower Students</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#003566] text-white p-6 rounded-lg shadow-lg">
              <div className="mb-2">
                <span className="text-5xl font-bold">500+</span>
                <p className="text-sm">Notes Shared</p>
              </div>
              <div className="mt-4">
                <span className="text-5xl font-bold">800+</span>
                <p className="text-sm">Happy Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved design element at bottom */}
      <div className="absolute bottom-0 right-0 w-full h-32 overflow-hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-[#003566]"
          ></path>
        </svg>
      </div>

      {/* Custom animation for floating notes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotate, 0deg));
          }
          100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
        }
      `}</style>
    </section>
  );
}
