"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ExternalLink, User } from "lucide-react";

type Contribution = {
  id: number;
  title: string;
  date: string;
  summary?: string;
};

type Profile = {
  id: string | number;
  name: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
  interests?: string[];
  contributions?: Contribution[];
};

const sampleProfile: Profile = {
  id: "u1",
  name: "Rohit Kumar",
  email: "rohit.k@example.com",
  bio: "Third year CS student. Loves clean notes and teaching peers.",
  avatarUrl: "",
  interests: ["Algorithms", "Databases", "Machine Learning"],
  contributions: [
    { id: 1, title: "Data Structures Notes (CS101)", date: "2025-06-12", summary: "Comprehensive notes with examples." },
    { id: 2, title: "OS Cheatsheet", date: "2025-02-03", summary: "Concise summary for exams." },
  ],
};

export default function ProfileSheet({ user = sampleProfile, trigger, }: { user?: Profile; trigger?: React.ReactNode }) {
  const defaultTrigger = (
    <Button className="inline-flex items-center gap-2 rounded-full p-0 w-10 h-10 overflow-hidden">
      <Avatar>
        {user.avatarUrl ? (
          <AvatarImage src={user.avatarUrl} alt={user.name} />
        ) : (
          <AvatarFallback>{user.name?.[0] ?? "U"}</AvatarFallback>
        )}
      </Avatar>
    </Button>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger ?? defaultTrigger}</SheetTrigger>

      <SheetContent side="right" className="max-w-md bg-white">
        <SheetHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                {user.avatarUrl ? (
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                ) : (
                  <AvatarFallback>
                    {user.name?.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <SheetTitle>{user.name}</SheetTitle>
                {user.email && <SheetDescription>{user.email}</SheetDescription>}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 text-xs text-gray-500">
                <User className="w-4 h-4" /> Member
              </span>
            </div>
          </div>
          {user.bio && <p className="text-sm text-gray-600 mt-3">{user.bio}</p>}
        </SheetHeader>

        <div className="px-4 py-2 overflow-y-auto flex-1">
          <section className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {(user.interests ?? []).map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Contributions</h3>
            <div className="flex flex-col gap-3">
              {(user.contributions ?? []).map((c) => (
                <Card key={c.id} className="border">
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-gray-800">{c.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{new Date(c.date).toLocaleDateString()}</div>
                        {c.summary && <p className="text-xs text-gray-600 mt-2">{c.summary}</p>}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" /> View
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <SheetFooter>
          <div className="flex items-center justify-between gap-3">
            <Button variant="ghost" className="text-sm">
              Message
            </Button>
            <Button className="bg-blue-600 text-white">Follow</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}