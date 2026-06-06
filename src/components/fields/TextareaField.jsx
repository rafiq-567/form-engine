export default function TextareaField({ field }) {
  return (
    <div>
      <label className="block mb-2">
        {field.label}
      </label>

      <textarea
        rows={4}
        placeholder="Enter text..."
        className="w-full border rounded p-2"
      />
    </div>
  );
}