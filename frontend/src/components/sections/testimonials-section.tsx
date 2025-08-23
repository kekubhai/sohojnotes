import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    initials: "JD",
    role: "University Student",
    rating: 5,
    testimonial: "SohojNotes has revolutionized the way I study. The collaborative features make group projects seamless.",
  },
  {
    name: "John Smith", 
    initials: "JS",
    role: "Graduate Student",
    rating: 5,
    testimonial: "The real-time collaboration and note organization features have significantly improved my academic performance.",
  },
  {
    name: "Emily Johnson",
    initials: "EJ", 
    role: "Research Scholar",
    rating: 5,
    testimonial: "An essential tool for any student. The interface is intuitive and the features are exactly what we need.",
  },
  {
    name: "Michael Chen",
    initials: "MC",
    role: "PhD Candidate", 
    rating: 5,
    testimonial: "SohojNotes has made collaborative research so much easier. Highly recommend to all academic peers.",
  },
  {
    name: "Sarah Wilson",
    initials: "SW",
    role: "Master's Student",
    rating: 5,
    testimonial: "The best note-taking platform I've used. Perfect for organizing thoughts and collaborating with classmates.",
  },
  {
    name: "David Brown",
    initials: "DB",
    role: "Undergraduate",
    rating: 5,
    testimonial: "Simple, effective, and collaborative. SohojNotes has become an indispensable part of my study routine.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from students who have transformed their study experience with SohojNotes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial Text */}
                <blockquote className="mb-6 text-muted-foreground leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" 
                      alt={testimonial.name} 
                    />
                    <AvatarFallback className="text-xs font-medium bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 out of 5</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Based on <strong>1,000+</strong> reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
