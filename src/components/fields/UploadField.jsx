export default function UploadField({ field }) {
  return (
    <div>
      <label className="block mb-2">
        {field.label}
      </label>

      <input
        type="file"
        className="w-full border rounded p-2"
      />
    </div>
  );
}