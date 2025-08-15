"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "My Notes", href: "#" },
  { name: "Explore Deals", href: "#" },
];

const moreOptions = [
  { name: "Settings", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Profile", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          
          {/* More Options Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <span>More Options</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {moreMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md border bg-popover p-1 shadow-md">
                {moreOptions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <Button variant="outline" size="sm">
            Join
          </Button>
          <Button size="sm">Login</Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
              >
                {item.name}
              </Link>
            ))}
            {moreOptions.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Join
              </Button>
              <Button className="w-full">Login</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
