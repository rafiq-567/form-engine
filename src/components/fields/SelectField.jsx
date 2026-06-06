export default function SelectField({
  field,
}) {
  return (
    <div>
      <label>{field.label}</label>

      <select className="w-full border rounded px-3 py-2 mt-2">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  );
}