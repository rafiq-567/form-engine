"use client";
import { memo } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import useFormStore from "../store/formStore";
import SortableField from "./SortableField";

const CanvasInner = memo(function CanvasInner({ fields, onDragEnd }) {
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-3">
          {fields.map((field) => (
            <SortableField key={field.id} field={field} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
});

export default function Canvas() {
  const fields = useFormStore((state) => state.fields);
  const reorderFields = useFormStore((state) => state.reorderFields);

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;
    const oldIndex = fields.findIndex((f) => f.id === active.id);
    const newIndex = fields.findIndex((f) => f.id === over.id);
    reorderFields(arrayMove(fields, oldIndex, newIndex));
  };

  return (
    <div className="flex-1 p-6 bg-slate-100 overflow-y-auto">
      <div className="bg-white min-h-full rounded-lg border p-4">
        <h1 className="font-bold mb-4">Untitled Form</h1>

        {fields.length === 0 && (
          <div className="text-center text-gray-400 py-20 border-2 border-dashed rounded-lg">
            Drag fields here to build your form
          </div>
        )}

        <CanvasInner fields={fields} onDragEnd={handleDragEnd} />
      </div>
    </div>
  );
}