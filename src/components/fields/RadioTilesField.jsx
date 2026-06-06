"use client";

import { useState } from "react";

export default function RadioTilesField({ field }) {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <label className="block mb-2">
        {field.label}
      </label>

      <div className="grid grid-cols-2 gap-2">
        {["Option 1", "Option 2"].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={`border rounded p-4 ${
              selected === option
                ? "border-blue-500 bg-blue-50"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}