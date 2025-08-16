import Link from "next/link";
import {
  Home,
  Search,
  ClipboardCheck,
  FileText,
  Eye,
  Tag,
  Badge,
  MessageSquare,
  Bell,
  User,
  HelpCircle
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard", active: true },
  { label: "Find Notes", icon: Search, href: "/find-notes" },
  { label: "My Requests", icon: ClipboardCheck, href: "/requests" },
  { label: "My Notes", icon: FileText, href: "/my-notes" },
  { label: "Explore", icon: Eye, href: "/explore" },
  { label: "Deals", icon: Tag, href: "/deals" },
  { label: "Brands", icon: Badge, href: "/brands" },
  { label: "Messages", icon: MessageSquare, href: "/messages" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Profile & Settings", icon: User, href: "/profile" },
  { label: "Help & Support", icon: HelpCircle, href: "/help" },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen bg-[#2c3e50] px-6 py-8 w-72">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-white">
          সহজ <span className="text-blue-400">Path</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              item.active 
                ? "bg-blue-600 text-white" 
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
