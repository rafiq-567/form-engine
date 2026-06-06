export default function ParagraphField({ field }) {
  return (
    <p className="text-sm text-gray-600 leading-relaxed">
      {field.label} — This is a paragraph. Add your text content here.
    </p>
  );
}