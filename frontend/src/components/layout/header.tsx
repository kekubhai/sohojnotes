"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Explore", href: "/explore" },
  { name: "Deals", href: "/deals" },
  { name: "Find Notes", href: "/find-notes" },
  { name: "Requests", href: "/requests" },
];

const moreOptions = [
  { name: "Settings", href: "#" },
  { name: "Help Center", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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

        {/* Desktop Auth Buttons or User Profile */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  {user.avatarUrl ? (
                    <Image
                      src={user.avatarUrl}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/signup">Join</Link>
              </Button>
              <Button size="sm" className="bg-blue-600 text-white" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
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
              {user ? (
                <Button onClick={handleLogout} className="w-full">
                  Logout
                </Button>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/signup">Join</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}