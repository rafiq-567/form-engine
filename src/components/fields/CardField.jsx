export default function CardField({ field }) {
  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white text-sm">
      <div className="font-semibold text-gray-800 mb-1">{field.label}</div>
      <p className="text-gray-400 text-xs">Card content goes here. Add any elements inside.</p>
    </div>
  );
}