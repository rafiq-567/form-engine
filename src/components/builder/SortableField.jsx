"use client";
import { memo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import FieldRenderer from "./FieldRenderer";

const SortableField = memo(function SortableField({ field }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <FieldRenderer field={field} dragListeners={listeners} />
    </div>
  );
});

export default SortableField;