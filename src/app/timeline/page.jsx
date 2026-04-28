"use client";

import { useState, useEffect } from "react";
import { PhoneCall, MessageSquare, Video } from "lucide-react";

const typeIcons = {
  Call: <PhoneCall size={18} className="text-green-500" />,
  Text: <MessageSquare size={18} className="text-blue-500" />,
  Video: <Video size={18} className="text-purple-500" />,
};

const TimeLinePage = () => {
  const [timeline, setTimeline] = useState([]);
  const [active, setActive] = useState("All");

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("timeline") || "[]");
  setTimeline(data);
}, []);

  const filtered =
    active === "All" ? timeline : timeline.filter((e) => e.type === active);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-slate-50 p-8 w-6/12 mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="w-64 px-4 py-2.5 rounded-xl border border-dashed border-blue-300 bg-white text-slate-600 text-sm appearance-none cursor-pointer focus:outline-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Timeline List */}
      {filtered.length === 0 ? (
        <p className="text-slate-400 text-sm">
          No {active === "All" ? "" : active} interactions logged yet.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-4"
            >
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                {typeIcons[entry.type] ?? "📌"}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
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
};

export default TimeLinePage;