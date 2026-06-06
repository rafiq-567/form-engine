"use client";
import { useState } from "react";

export default function CreatedByYouField({ field }) {
  const [tab, setTab] = useState("pending");

  const pending = [
    { id: "AKIJW 11", title: "test", dueDate: "-", assignedTo: "-", icon: "🚫" },
  ];
  const completed = [
    { id: "AKIJW 5", title: "Logo Design", dueDate: "2024-01-10", assignedTo: "Alice", icon: "✅" },
  ];

  const items = tab === "pending" ? pending : completed;

  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">{field.label || "Created by you"}</h3>
        <select
          onClick={(e) => e.stopPropagation()}
          className="text-xs border rounded px-2 py-1 text-gray-500"
        >
          <option>All time</option>
          <option>This week</option>
          <option>This month</option>
        </select>
      </div>

      <div className="flex rounded-lg overflow-hidden border mb-4 bg-gray-100 p-0.5 gap-0.5">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setTab("pending"); }}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
            tab === "pending"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Pending
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setTab("completed"); }}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
            tab === "completed"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Marked completed
        </button>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-gray-500">Issues</span>
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
          {items.length}
        </span>
        <span className="ml-auto text-xs text-gray-400">Due date</span>
        <span className="text-xs text-gray-400 ml-6">Assigned to</span>
      </div>

      <div className="space-y-3">
        {items.length === 0 && (
          <p className="text-xs text-gray-400 text-center py-4">No issues</p>
        )}
        {items.map((issue) => (
          <div key={issue.id} className="flex items-center gap-3 text-sm">
            <span className="text-base">{issue.icon}</span>
            <span className="text-gray-400 text-xs whitespace-nowrap">{issue.id}</span>
            <span className="text-gray-700 flex-1 truncate">{issue.title}</span>
            <span className="text-xs text-gray-400 w-16 text-center">{issue.dueDate}</span>
            <span className="text-xs text-gray-400 w-16 text-center">{issue.assignedTo}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => e.stopPropagation()}
        className="mt-4 text-xs text-indigo-500 hover:text-indigo-700 w-full text-center"
      >
        View all issues
      </button>
    </div>
  );
}