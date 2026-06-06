export default function CheckboxField({
  field,
}) {
  return (
    <label className="flex gap-2">
      <input type="checkbox" />
      {field.label}
    </label>
  );
}