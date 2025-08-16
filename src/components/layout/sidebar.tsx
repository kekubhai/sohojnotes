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
  Settings
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Find Notes", icon: Search, href: "/find-notes" },
  { label: "My Requests", icon: ClipboardCheck, href: "/requests" },
  { label: "My Notes", icon: FileText, href: "/my-notes" },
  { label: "Explore", icon: Eye, href: "/explore" },
  { label: "Deals", icon: Tag, href: "/deals" },
  { label: "Brands", icon: Badge, href: "/brands" },
  { label: "Messages", icon: MessageSquare, href: "/messages" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Profile & Settings", icon: User, href: "/profile" },
  { label: "More & Options", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen bg-[#eaf6ff] px-6 py-10 w-72 border-r border-blue-100">
      <nav className="flex flex-col gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-4 text-lg font-medium text-[#1a3365] hover:text-blue-700 transition-colors"
          >
            <item.icon className="w-6 h-6" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
