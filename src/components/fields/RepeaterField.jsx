"use client";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function RepeaterField({ field }) {
  const [rows, setRows] = useState(["Row 1"]);

  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{field.label}</label>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2 border rounded px-3 py-2 bg-white">
            <span className="text-xs text-gray-500 flex-1">{row}</span>
            <button onClick={() => setRows(rows.filter((_, j) => j !== i))}>
              <Trash2 size={14} className="text-red-400 hover:text-red-600" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setRows([...rows, `Row ${rows.length + 1}`])}
        className="mt-2 flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700"
      >
        <Plus size={14} /> Add Row
      </button>
    </div>
  );
}