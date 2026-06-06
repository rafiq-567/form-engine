export default function FormControlField({ field }) {
  return (
    <div className="border rounded-lg p-3 bg-pink-50 border-pink-200">
      <label className="block text-xs font-medium text-pink-700 mb-1">{field.label}</label>
      <input className="w-full border border-pink-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Form control input" />
    </div>
  );
}