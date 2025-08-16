"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, FileText, ThumbsUp } from "lucide-react";

export default function RequestsPage() {
  const [requests, setRequests] = useState(() => [
    { id: 1, title: "Java Programs", user: "Rohit Kumar", type: "Tutorial", votes: 2, upvoted: false },
    { id: 2, title: "Operating System (OS)", user: "Ananya Singh", type: "Notes", votes: 5, upvoted: false },
    { id: 3, title: "Logistic Regression", user: "Priya Sharma", type: "Tutorial", votes: 1, upvoted: false },
    { id: 4, title: "Database Normalization", user: "Arjun Patel", type: "Notes", votes: 0, upvoted: false },
  ]);

  // Load persisted votes from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("sohoj_requests_votes");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // merge by id to avoid losing any new requests
          setRequests((prev) =>
            prev.map((r) => {
              const found = parsed.find((p: any) => p.id === r.id);
              return found ? { ...r, votes: found.votes ?? r.votes, upvoted: !!found.upvoted } : r;
            })
          );
        }
      }
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  // Persist votes whenever requests change
  useEffect(() => {
    try {
      const compact = requests.map((r) => ({ id: r.id, votes: r.votes ?? 0, upvoted: !!r.upvoted }));
      localStorage.setItem("sohoj_requests_votes", JSON.stringify(compact));
    } catch (e) {
      // ignore
    }
  }, [requests]);

  const toggleUpvote = (id: number) => {
    setRequests((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const upvoted = !r.upvoted;
        const votes = Math.max(0, (r.votes ?? 0) + (upvoted ? 1 : -1));
        return { ...r, upvoted, votes };
      })
    );
  };

  return (
    <div className="min-h-screen p-8">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10 text-gray-800"
      >
        Skill Requests ✨
      </motion.h1>

      {/* Requests List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {requests.map((req, index) => (
          <motion.div
            key={req.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="shadow-lg hover:shadow-2xl transition rounded-2xl border bg-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-700">{req.title}</h2>
                    <p className="text-sm text-gray-500">Requested by {req.user}</p>
                    <span
                      className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        req.type === "Tutorial" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                      }`}
                    >
                      {req.type}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {req.type === "Tutorial" ? (
                      <BookOpen className="w-5 h-5 text-blue-500" />
                    ) : (
                      <FileText className="w-5 h-5 text-green-500" />
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleUpvote(req.id)}
                        aria-pressed={!!req.upvoted}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          req.upvoted ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <ThumbsUp className={`w-4 h-4 ${req.upvoted ? "text-white" : "text-gray-600"}`} />
                        <span>{req.votes ?? 0}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-6"
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" /> Request a Tutorial
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" /> Request Notes
        </Button>
      </motion.div>
    </div>
  );
}
