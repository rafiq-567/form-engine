export default function BreadcrumbField({ field }) {
  return (
    <nav className="text-sm text-gray-500 flex items-center gap-1">
      <span className="hover:text-indigo-500 cursor-pointer">Home</span>
      <span>/</span>
      <span className="hover:text-indigo-500 cursor-pointer">Section</span>
      <span>/</span>
      <span className="text-gray-800 font-medium">{field.label}</span>
    </nav>
  );
}