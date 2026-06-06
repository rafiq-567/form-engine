export default function BlockquoteField({ field }) {
  return (
    <blockquote className="border-l-4 border-indigo-400 pl-4 py-1 bg-indigo-50 rounded-r">
      <p className="text-sm text-indigo-700 italic">"{field.label}"</p>
      <cite className="text-xs text-indigo-400 mt-1 block">— Author</cite>
    </blockquote>
  );
}