export default function BoxField({ field }) {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50 text-sm text-green-700">
      <span className="font-medium">{field.label}</span>
      <p className="text-xs mt-1 text-green-500">Box layout container</p>
    </div>
  );
}