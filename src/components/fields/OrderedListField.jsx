export default function OrderedListField({ field }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{field.label}</label>
      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 border rounded p-3">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ol>
    </div>
  );
}