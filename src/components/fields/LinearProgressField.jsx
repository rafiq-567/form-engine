export default function LinearProgressField({ field }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{field.label}</label>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: "60%" }} />
      </div>
      <p className="text-xs text-gray-400 mt-1">60%</p>
    </div>
  );
}