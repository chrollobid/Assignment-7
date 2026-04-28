"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = {
  Call: "#1e3a2f",
  Text: "#7c3aed",
  Video: "#22c55e",
};

const StatsPage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/api/timeline")
      .then((res) => res.json())
      .then((data) => setTimeline(data));
  }, []);

  // Count by type
  const counts = timeline.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(counts).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="border border-dashed border-blue-300 rounded-2xl p-6 mb-6">
          <h1 className="text-4xl font-bold text-slate-800">Friendship Analytics</h1>
        </div>

        {/* Donut Chart */}
        <div className="border border-dashed border-blue-300 rounded-2xl p-6 bg-white">
          <p className="text-slate-600 font-medium mb-4">By Interaction Type</p>

          {chartData.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-20">
              No interactions logged yet. Use Call, Text or Video on a friend's page!
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={150}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={COLORS[entry.name] ?? "#94a3b8"} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} interactions`, name]}
                  contentStyle={{
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => (
                    <span className="text-slate-600 text-sm">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

      </div>
    </div>
  );
};

export default StatsPage;