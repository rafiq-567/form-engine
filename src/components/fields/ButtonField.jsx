export default function ButtonField({
  field,
}) {
  return (
    <button className="bg-indigo-500 text-white px-4 py-2 rounded">
      {field.label}
    </button>
  );
}