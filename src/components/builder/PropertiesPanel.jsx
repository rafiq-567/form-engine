// "use client";

// import useFormStore from "../store/formStore";

// // import useFormStore from "@/store/formStore";

// export default function PropertiesPanel() {
//   const fields =
//     useFormStore((state) => state.fields);

//   const selectedField =
//     useFormStore(
//       (state) => state.selectedField
//     );

//   const updateField =
//     useFormStore(
//       (state) => state.updateField
//     );

//   const field = fields.find(
//     (item) => item.id === selectedField
//   );

//   if (!field) {
//     return (
//       <div className="w-80 border-l p-4">
//         Select a field
//       </div>
//     );
//   }

//   return (
//     <div className="w-80 border-l p-4">
//       <h2 className="font-bold mb-4">
//         Properties
//       </h2>

//       <label className="block mb-2">
//         Label
//       </label>

//       <input
//         value={field.label}
//         onChange={(e) =>
//           updateField(field.id, {
//             label: e.target.value,
//           })
//         }
//         className="w-full border rounded p-2"
//       />
//     </div>
//   );
// }


"use client";
import useFormStore from "../store/formStore";

export default function PropertiesPanel() {
  const fields = useFormStore((state) => state.fields);
  const selectedField = useFormStore((state) => state.selectedField);
  const updateField = useFormStore((state) => state.updateField);

  const field = fields.find((f) => f.id === selectedField);

  if (!field) return (
    <div className="w-80 border-l p-4 bg-white text-gray-400 flex items-center justify-center">
      Select a field to edit properties
    </div>
  );

  return (
    <div className="w-80 border-l p-4 bg-white overflow-y-auto">
      <h2 className="font-bold mb-4 text-sm uppercase text-gray-500">
        {field.type.toUpperCase()} FIELD
      </h2>

      {[
        { key: "label", label: "Label" },
        { key: "placeholder", label: "Placeholder" },
        { key: "helpText", label: "Help Text" },
      ].map(({ key, label }) => (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            value={field[key] || ""}
            onChange={(e) => updateField(field.id, { [key]: e.target.value })}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder={label}
          />
        </div>
      ))}
    </div>
  );
}