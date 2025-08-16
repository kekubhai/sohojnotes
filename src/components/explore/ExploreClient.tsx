"use client";

import React, { useMemo, useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type Post = {
  id: number;
  user: string;
  avatar?: string;
  tags: string[];
  text: string;
  likes: number;
  comments: number;
};

const samplePosts: Post[] = [
  { id: 1, user: "Ananya Singh", tags: ["AI", "ML"], text: "Shared my notes on logistic regression.", likes: 12, comments: 3 },
  { id: 2, user: "Rohit Kumar", tags: ["DSA"], text: "Posted solution walkthrough for tree problems.", likes: 8, comments: 2 },
  { id: 3, user: "Priya Sharma", tags: ["Databases", "SQL"], text: "A quick guide to normalization.", likes: 5, comments: 1 },
];

const trendingTags = ["AI", "Web3", "Music", "Football", "DSA", "ML", "Databases"];

const recommendedPeers = [
  { id: "p1", name: "Arjun Patel", bio: "CSE 2nd yr, into DSA" },
  { id: "p2", name: "Simran K.", bio: "AI enthusiast, building projects" },
  { id: "p3", name: "Akash", bio: "Fullstack dev, loves teaching" },
];

const recommendedCommunities = [
  { id: "c1", name: "Coding Club", desc: "Algorithms & contests" },
  { id: "c2", name: "Music Society", desc: "For music lovers" },
  { id: "c3", name: "ML Group", desc: "Study group for ML" },
];

export default function ExploreClient() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [following, setFollowing] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (activeTag && !p.tags.includes(activeTag)) return false;
      if (query) {
        const q = query.toLowerCase();
        return p.text.toLowerCase().includes(q) || p.user.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q);
      }
      return true;
    });
  }, [posts, query, activeTag]);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Center column */}
          <div>
            {/* Search bar */}
            <div className="mb-4">
              <div className="flex items-center gap-2 max-w-xl">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    aria-label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search peers, interests, communities"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border bg-white"
                  />
                </div>
                <Button variant="ghost">Filters</Button>
              </div>
            </div>

            {/* Trending tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Trending Interests</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {trendingTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
                    className={`whitespace-nowrap px-3 py-1 rounded-full border text-sm ${activeTag === t ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                  >
                    #{t}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts feed */}
            <div className="flex flex-col gap-4">
              {filtered.map((p) => (
                <Card key={p.id} className="">
                  <CardContent className="flex gap-4">
                    <div className="shrink-0">
                      <Avatar>
                        <div className="bg-gray-200 size-8 flex items-center justify-center">{p.user?.[0]}</div>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-800">{p.user}</div>
                          <div className="text-xs text-gray-500">{p.tags.map((t) => `#${t}`).join(" ")}</div>
                        </div>
                        <div className="text-sm text-gray-500">{p.likes} ❤ {p.comments} 💬</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">{p.text}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <button className="text-sm text-gray-600">Like</button>
                        <button className="text-sm text-gray-600">Comment</button>
                        <button className="text-sm text-gray-600">Share</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right column */}
          <aside className="hidden lg:block">
            <div className="space-y-4 sticky top-6">
              <section>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended Peers</h4>
                <div className="flex flex-col gap-3">
                  {recommendedPeers.map((r) => (
                    <Card key={r.id} className="p-2">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <div className="bg-gray-200 size-8 flex items-center justify-center">{r.name?.[0]}</div>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{r.name}</div>
                            <div className="text-xs text-gray-500">{r.bio}</div>
                          </div>
                        </div>
                        <div>
                          <Button size="sm" onClick={() => setFollowing((f) => ({ ...f, [r.id]: !f[r.id] }))}>
                            {following[r.id] ? "Following" : "Connect"}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended Communities</h4>
                <div className="flex flex-col gap-2">
                  {recommendedCommunities.map((c) => (
                    <div key={c.id} className="flex items-center justify-between gap-3 bg-white p-3 rounded-md border">
                      <div>
                        <div className="text-sm font-medium">{c.name}</div>
                        <div className="text-xs text-gray-500">{c.desc}</div>
                      </div>
                      <Button size="sm" variant="ghost">Join</Button>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Upcoming Events</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="bg-white p-3 rounded-md border">Hackathon Sprint — Sep 2</div>
                  <div className="bg-white p-3 rounded-md border">ML Study Jam — Aug 25</div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
