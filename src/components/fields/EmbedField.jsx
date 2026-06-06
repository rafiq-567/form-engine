export default function EmbedField({ field }) {
  return (
    <div className="border-2 border-dashed border-red-300 rounded-lg p-4 bg-red-50 text-center">
      <p className="text-xs font-medium text-red-600">{field.label}</p>
      <p className="text-xs text-red-400 mt-1">Embed code / iframe goes here</p>
    </div>
  );
}