export default function TestField({ field }) {
  return (
    <div className="border-2 border-dashed border-yellow-300 rounded-lg p-4 bg-yellow-50">
      <p className="text-xs font-medium text-yellow-700">{field.label} — Test Component</p>
    </div>
  );
}