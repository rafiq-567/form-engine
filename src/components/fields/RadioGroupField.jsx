export default function RadioGroupField({
  field,
}) {
  return (
    <div>
      <label>{field.label}</label>

      <div className="mt-2 space-y-2">
        <label className="flex gap-2">
          <input type="radio" name={field.id} />
          Option 1
        </label>

        <label className="flex gap-2">
          <input type="radio" name={field.id} />
          Option 2
        </label>
      </div>
    </div>
  );
}