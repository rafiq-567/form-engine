export default function PasswordField({
  field,
}) {
  return (
    <div>
      <label>{field.label}</label>

      <input
        type="password"
        placeholder="********"
        className="w-full border rounded px-3 py-2 mt-2"
      />
    </div>
  );
}