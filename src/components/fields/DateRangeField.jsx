export default function DateRangeField({
  field,
}) {
  return (
    <div>
      <label>{field.label}</label>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <input
          type="date"
          className="border rounded px-3 py-2"
        />

        <input
          type="date"
          className="border rounded px-3 py-2"
        />
      </div>
    </div>
  );
}