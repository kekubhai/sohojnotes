import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, User } from "lucide-react";

const blogPosts = [
  {
    category: "Collaboration",
    title: "The Art of Note-Writing",
    description: "Master effective note-taking techniques for academic success.",
    author: "Jane Doe",
    authorInitials: "JD",
    date: "11 Jan 2022",
    readTime: "5 min read",
    categoryColor: "bg-blue-100 text-blue-800",
  },
  {
    category: "Success",
    title: "Student Success Stories",
    description: "Real-life examples of collaboration leading to academic achievements.",
    author: "John Smith",
    authorInitials: "JS", 
    date: "11 Jan 2022",
    readTime: "5 min read",
    categoryColor: "bg-green-100 text-green-800",
  },
  {
    category: "Tips",
    title: "Effective Collaboration Techniques",
    description: "Strategies to enhance teamwork and communication among peers.",
    author: "Emily Clark",
    authorInitials: "EC",
    date: "11 Jan 2022", 
    readTime: "5 min read",
    categoryColor: "bg-purple-100 text-purple-800",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            Blog
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Unlocking Student Potential
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the power of collaboration among students.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-background shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-0">
                {/* Post Image */}
                <div className="overflow-hidden">
                  <Image
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt={post.title}
                    width={400}
                    height={240}
                    className="aspect-[3/2] w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <Badge className={`mb-3 ${post.categoryColor} border-0`}>
                    {post.category}
                  </Badge>

                  {/* Post Content */}
                  <h3 className="mb-2 text-xl font-semibold leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>

                  {/* Author and Meta Info */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage 
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" 
                        alt={post.author} 
                      />
                      <AvatarFallback className="text-xs font-medium">
                        {post.authorInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{post.author}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center lg:justify-end">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
