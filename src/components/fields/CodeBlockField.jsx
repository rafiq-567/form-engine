export default function CodeBlockField({ field }) {
  return (
    <div>
      <label className="block mb-1 text-xs font-medium text-gray-500">{field.label}</label>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-lg p-4 overflow-x-auto">
        <code>{`// Code block\nconst hello = "world";\nconsole.log(hello);`}</code>
      </pre>
    </div>
  );
}