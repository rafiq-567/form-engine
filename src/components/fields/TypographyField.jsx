export default function TypographyField({ field }) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold text-gray-900">Heading 1</h1>
      <h2 className="text-xl font-semibold text-gray-800">Heading 2</h2>
      <p className="text-sm text-gray-600">{field.label} — Body text sample</p>
    </div>
  );
}