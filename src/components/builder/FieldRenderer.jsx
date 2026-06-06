"use client";
import { memo, useMemo } from "react";
import useFormStore from "../store/formStore";
import { fieldRegistry } from "../lib/fieldRegistry";

const FieldRenderer = memo(function FieldRenderer({ field, dragListeners }) {
  const selectField = useFormStore((state) => state.selectField);
  const removeField = useFormStore((state) => state.removeField);
  const isSelected = useFormStore((state) => state.selectedField === field.id);

  const Component = useMemo(() => fieldRegistry[field.type], [field.type]);

  if (!Component) {
    return (
      <div className="border border-red-200 rounded-lg p-4 text-red-400 text-sm">
        Unknown field type: {field.type}
      </div>
    );
  }

  return (
    <div
      onClick={() => selectField(field.id)}
      className={`border rounded-lg p-4 cursor-pointer relative group transition-all ${
        isSelected
          ? "border-indigo-500 ring-2 ring-indigo-200"
          : "border-gray-200 hover:border-gray-400"
      }`}
    >
      {dragListeners && (
        <div
          {...dragListeners}
          onClick={(e) => e.stopPropagation()}
          className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing z-10 px-1 py-2 text-gray-300 hover:text-gray-500"
        >
          ⠿
        </div>
      )}

      <Component field={field} />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          removeField(field.id);
        }}
        className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-xs px-2 py-1 bg-white border rounded shadow-sm transition-opacity"
      >
        ✕
      </button>
    </div>
  );
});

export default FieldRenderer;