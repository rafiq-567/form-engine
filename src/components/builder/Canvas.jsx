// "use client";

// import useFormStore from "../store/formStore";
// // import useFormStore from "@/store/formStore";
// import FieldRenderer from "./FieldRenderer";

// export default function Canvas() {
//   const fields =
//     useFormStore((state) => state.fields);

//   return (
//     <div className="flex-1 p-6 bg-slate-100">
//       <div className="bg-white min-h-screen rounded-lg border p-4">
//         <h1 className="font-bold mb-4">
//           Untitled Form
//         </h1>

//         <div className="space-y-4">
//           {fields.map((field) => (
//             <FieldRenderer
//               key={field.id}
//               field={field}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
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
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useFormStore from "../store/formStore";
import FieldRenderer from "./FieldRenderer";

function SortableField({ field }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <FieldRenderer field={field} />
    </div>
  );
}

export default function Canvas() {
  const fields = useFormStore((state) => state.fields);
  const reorderFields = useFormStore((state) => state.reorderFields);

  const sensors = useSensors(useSensor(PointerSensor));

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
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {fields.map((field) => (
                <SortableField key={field.id} field={field} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}