export default function CaptionField({ field }) {
  return (
    <p className="text-xs text-gray-400 italic text-center">{field.label} — Caption text</p>
  );
}