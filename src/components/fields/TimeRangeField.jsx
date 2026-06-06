export default function TimeRangeField({ field }) {
  return (
    <div>
      <label className="block mb-2">
        {field.label}
      </label>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="time"
          className="border rounded p-2"
        />

        <input
          type="time"
          className="border rounded p-2"
        />
      </div>
    </div>
  );
}