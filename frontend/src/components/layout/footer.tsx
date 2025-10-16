import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "API Reference", href: "#api" },
    { name: "Status", href: "#status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container px-4 py-12 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
            <div className="flex-1 mb-8 lg:mb-0 lg:pr-8">
              <h3 className="mb-2 text-2xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates, study tips, and collaboration insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                  <span className="text-lg font-bold text-white">সহ</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    সহজPath
                  </span>
                  <span className="text-xs text-muted-foreground -mt-1">Smart Notes</span>
                </div>
              </Link>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Empowering students through collaborative note-taking and seamless academic collaboration.
              Transform your study experience today.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@sahojpath.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+880 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(navigation).map(([section, links]) => (
                <div key={section}>
                  <h4 className="mb-4 text-sm font-semibold capitalize">{section}</h4>
                  <ul className="space-y-3 text-sm">
                    {links.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="relative text-muted-foreground transition-all duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:transition-all after:duration-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 সহজPath. All rights reserved.</span>
            <Badge variant="outline" className="text-xs">
              Made with ❤️ for Students
            </Badge>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="transition-transform text-muted-foreground hover:text-foreground hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
