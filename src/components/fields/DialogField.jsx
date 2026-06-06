export default function DialogField({ field }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white text-sm w-full">
      <div className="font-semibold text-gray-800 mb-1">{field.label}</div>
      <p className="text-gray-500 text-xs mb-3">Dialog content goes here.</p>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-1 text-xs border rounded text-gray-600 hover:bg-gray-50">Cancel</button>
        <button className="px-3 py-1 text-xs bg-indigo-500 text-white rounded hover:bg-indigo-600">Confirm</button>
      </div>
    </div>
  );
}