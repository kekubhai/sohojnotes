"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, X, QrCode } from "lucide-react";

const notesData = {
  free: [
    { id: 1, title: "Data Structures Notes", subject: "DSA101", author: "Riya Sharma", content: "Full notes content for Data Structures..." },
    { id: 2, title: "Database Systems", subject: "DBMS202", author: "Arjun Mehta", content: "Full notes content for Database Systems..." },
    { id: 3, title: "Operating Systems", subject: "OS301", author: "Kavya Patel", content: "Full notes content for Operating Systems..." },
  ],
  paid: [
    { id: 4, title: "Machine Learning Advanced", subject: "ML401", author: "Ankit Verma", content: "Full premium notes content for Machine Learning..." },
    { id: 5, title: "Cloud Computing Guide", subject: "CC402", author: "Sneha Gupta", content: "Full premium notes content for Cloud Computing..." },
  ],
};

export default function NotesBank() {
  const [selectedTab, setSelectedTab] = useState<"free" | "paid">("free");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeNote, setActiveNote] = useState<any | null>(null);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [paidUnlockedIds, setPaidUnlockedIds] = useState<number[]>([]);

  function openNote(note: any) {
    if (selectedTab === "free" || paidUnlockedIds.includes(note.id)) {
      setActiveNote(note);
      setModalOpen(true);
    } else {
      // open scanner for paid notes
      setActiveNote(note);
      setScannerOpen(true);
    }
  }

  function simulatePayment() {
    if (!activeNote) return;
    // Hardcoded success flow: mark note as unlocked and open modal
    setPaidUnlockedIds((s) => [...s, activeNote.id]);
    setScannerOpen(false);
    setTimeout(() => {
      setModalOpen(true);
    }, 300);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6 text-center"
      >
        📚 Notes Bank
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setSelectedTab("free")}
          className={`px-6 py-2 rounded-full mx-2 font-semibold transition ${
            selectedTab === "free"
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Free Notes
        </button>
        <button
          onClick={() => setSelectedTab("paid")}
          className={`px-6 py-2 rounded-full mx-2 font-semibold transition ${
            selectedTab === "paid"
              ? "bg-yellow-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Paid Notes
        </button>
      </div>

      {/* Notes Grid - square tiles */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {notesData[selectedTab].map((note) => (
          <motion.div
            key={note.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250 }}
            onClick={() => openNote(note)}
            className={`bg-white rounded-md shadow-md p-4 relative cursor-pointer aspect-square flex flex-col justify-between border border-transparent hover:border-gray-200`}
          >
            {/* Lock for paid */}
            {selectedTab === "paid" && !paidUnlockedIds.includes(note.id) && (
              <div className="absolute top-3 right-3 bg-yellow-100 p-2 rounded-full">
                <Lock className="w-5 h-5 text-yellow-700" />
              </div>
            )}

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{note.title}</h2>
              <p className="text-sm text-gray-600">Subject: <span className="font-medium">{note.subject}</span></p>
              <p className="text-sm text-gray-500 mt-1">By {note.author}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">{selectedTab === "paid" ? "Premium" : "Free"}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs text-blue-500 font-semibold"
              >
                View
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for viewing note content (free or unlocked paid) */}
      {modalOpen && activeNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white w-96 h-96 rounded-md shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">{activeNote.title}</h3>
                <p className="text-sm text-gray-500">{activeNote.subject} • By {activeNote.author}</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-4 h-[calc(100%-72px)] overflow-auto text-sm text-gray-700">
              {/* Note content - placeholder text */}
              <p className="whitespace-pre-line">{activeNote.content}</p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Download</h4>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm">Download PDF</button>
                  <button className="px-4 py-2 rounded-md bg-gray-100 text-sm">Save</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Scanner overlay for paid notes */}
      {scannerOpen && activeNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setScannerOpen(false)}
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white w-80 rounded-md shadow-2xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Purchase Access</h3>
                <p className="text-sm text-gray-500">{activeNote.title} • {activeNote.subject}</p>
              </div>
              <button onClick={() => setScannerOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-48 h-48 bg-gray-50 rounded-md flex items-center justify-center border-2 border-dashed border-gray-200">
                {/* QR / Scanner placeholder */}
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>

              <p className="text-sm text-gray-600 text-center">Scan to pay using your preferred UPI / Wallet app.</p>

              <div className="flex gap-3">
                <button onClick={simulatePayment} className="px-4 py-2 rounded-md bg-green-600 text-white">Simulate Pay</button>
                <button onClick={() => setScannerOpen(false)} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
