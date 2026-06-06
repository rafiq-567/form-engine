"use client";

import { useState } from "react";
import FieldCard from "./FieldCard";

export default function CheckboxField() {
  const [checked, setChecked] =
    useState(false);

  return (
    <FieldCard title="Checkbox">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) =>
            setChecked(e.target.checked)
          }
        />

        Checkbox
      </label>
    </FieldCard>
  );
}