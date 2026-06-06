"use client";

import { useState } from "react";
import FieldCard from "./FieldCard";

export default function ButtonGroupField() {
  const [selected, setSelected] =
    useState("option1");

  return (
    <FieldCard title="Button Group">
      <div className="space-y-2">
        <button
          onClick={() =>
            setSelected("option1")
          }
          className={`w-full text-left px-3 py-2 rounded-md ${
            selected === "option1"
              ? "bg-indigo-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Option 1
        </button>

        <button
          onClick={() =>
            setSelected("option2")
          }
          className={`w-full text-left px-3 py-2 rounded-md ${
            selected === "option2"
              ? "bg-indigo-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Option 2
        </button>
      </div>
    </FieldCard>
  );
}