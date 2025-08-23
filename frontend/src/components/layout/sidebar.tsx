"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Home,
  Search,
  ClipboardCheck,
  FileText,
  Eye,
  Tag,
  User,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProfileSheet from "./profile-sheet";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard", active: true },
  { label: "Find Notes", icon: Search, href: "/find-notes" },
  { label: "My Requests", icon: ClipboardCheck, href: "/requests" },
  { label: "My Notes", icon: FileText, href: "/my-notes" },
  { label: "Explore", icon: Eye, href: "/explore" },
  { label: "Deals", icon: Tag, href: "/deals" },
  { label: "Profile & Settings", icon: User, href: "/profile" },
  { label: "Help & Support", icon: HelpCircle, href: "/help" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem("sohoj_sidebar_collapsed") === "1";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("sohoj_sidebar_collapsed", collapsed ? "1" : "0");
    } catch (e) {
      // ignore
    }
  }, [collapsed]);

  // publish a CSS variable so page content can offset itself from the fixed sidebar
  useEffect(() => {
    try {
      const width = collapsed ? "5rem" : "18rem"; // w-20 -> 5rem, w-72 -> 18rem
      document.documentElement.style.setProperty("--sohoj-sidebar-width", width);
    } catch (e) {
      // ignore
    }
  }, [collapsed]);

  return (
    <aside
      aria-expanded={!collapsed}
      className={`fixed left-0 top-0 h-screen px-3 py-6 transition-[width,background-color] duration-300 flex flex-col items-stretch ${
        collapsed ? "w-20" : "w-72"
      } bg-white/60 backdrop-blur-sm border-r border-gray-100 shadow-sm z-40 rounded-tr-xl rounded-br-xl`}
      style={{ width: 'var(--sohoj-sidebar-width)' }}
    >
      {/* Top: Logo + optional label */}
      <div className={`flex items-center gap-3 px-2 mb-6 ${collapsed ? "justify-center" : "justify-start"}`}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">
          স
        </div>
        {!collapsed && (
          <div>
            <h1 className="text-lg font-semibold text-gray-800 leading-none">সহজPath</h1>
            <p className="text-xs text-gray-500">Notes & Learning</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          if (item.label === "Profile & Settings") {
            return (
              <div key={item.label} className={`px-1 py-1 ${collapsed ? "flex justify-center" : ""}`}>
                <ProfileSheet
                  trigger={
                    <button className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50 ${
                      item.active ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`} title={item.label}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </button>
                  }
                />
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50 ${
                item.active ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer: collapsed toggle */}
      <div className={`mt-4 px-2 ${collapsed ? "flex justify-center" : "flex justify-end"}`}>
        <button
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition"
        >
          {collapsed ? <ChevronRight className="w-4 h-4 text-gray-600" /> : <ChevronLeft className="w-4 h-4 text-gray-600" />}
        </button>
      </div>
    </aside>
  );
}
