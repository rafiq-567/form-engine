export default function ListItemField({ field }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700 border rounded px-3 py-2">
      <span>•</span>
      <span>{field.label}</span>
    </div>
  );
}