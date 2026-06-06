export default function FieldCard({
  title,
  children,
}) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="text-xs text-gray-500 mb-3">
        {title}
      </div>

      {children}
    </div>
  );
}