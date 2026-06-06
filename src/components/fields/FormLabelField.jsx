export default function FormLabelField({ field }) {
  return (
    <label className="block text-sm font-medium text-rose-600">
      {field.label}
      <span className="text-rose-400 ml-1 text-xs">(Form Label)</span>
    </label>
  );
}