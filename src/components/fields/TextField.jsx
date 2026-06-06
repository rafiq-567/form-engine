export default function TextField({
  field,
}) {
  return (
    <div>
      <label className="block mb-2">
        {field.label}
      </label>

      <input
        className="w-full border rounded p-2"
        placeholder={field.label}
      />
    </div>
  );
}