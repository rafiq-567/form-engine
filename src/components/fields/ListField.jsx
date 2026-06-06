export default function ListField({ field }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{field.label}</label>
      <ul className="border rounded p-3 space-y-1 text-sm text-gray-600">
        <li className="flex items-center gap-2">• List item one</li>
        <li className="flex items-center gap-2">• List item two</li>
        <li className="flex items-center gap-2">• List item three</li>
      </ul>
    </div>
  );
}