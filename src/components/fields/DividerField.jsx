export default function DividerField({ field }) {
  return (
    <div className="flex items-center gap-3">
      <hr className="flex-1 border-gray-300" />
      {field.label && <span className="text-xs text-gray-400">{field.label}</span>}
      <hr className="flex-1 border-gray-300" />
    </div>
  );
}