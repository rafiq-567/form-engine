export default function LinkField({ field }) {
  return (
    <a href="#" className="text-blue-500 underline text-sm hover:text-blue-700">
      {field.label}
    </a>
  );
}