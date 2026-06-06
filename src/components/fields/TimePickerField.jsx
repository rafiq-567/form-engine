export default function TimePickerField({ field }) {
  return (
    <div>
      <label className="block mb-2">
        {field.label}
      </label>

      <input
        type="time"
        className="w-full border rounded p-2"
      />
    </div>
  );
}