"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Package } from "lucide-react";

const iconMap = {
  Call: <Phone size={18} className="text-slate-500" />,
  Text: <MessageSquare size={18} className="text-slate-500" />,
  Video: <Video size={18} className="text-slate-500" />,
  Meetup: <Package size={18} className="text-slate-500" />,
};

const FILTERS = ["All", "Call", "Text", "Video"];

export default function TimelinePage() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline") || "[]");
    setEntries(stored);
  }, []);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const filtered =
    filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen mx-auto w-6/12 bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === f
                ? "bg-slate-800 text-white border-slate-800"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-400">
          {entries.length === 0
            ? "No check-ins yet. Go log one!"
            : `No entries for "${filter}".`}
        </p>
      ) : (
        <div className="flex flex-col gap-2 max-w-2xl">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4"
            >
              <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                {iconMap[entry.type] ?? iconMap.Meetup}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {entry.type}{" "}
                  <span className="font-normal text-slate-500">
                    with {entry.friendName}
                  </span>
                </p>
                <p className="text-xs text-slate-400">{formatDate(entry.date)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}