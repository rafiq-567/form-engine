export default function EmailField({
  field,
}) {
  return (
    <div>
      <label>{field.label}</label>

      <input
        type="email"
        placeholder="name@example.com"
        className="w-full border rounded px-3 py-2 mt-2"
      />
    </div>
  );
}