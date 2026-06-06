export default function HeadingField({ field }) {
  return (
    <h1 className="text-2xl font-bold text-gray-900">{field.label}</h1>
  );
}