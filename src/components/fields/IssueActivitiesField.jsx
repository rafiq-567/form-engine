import { Paperclip, MessageSquare, LayoutGrid } from "lucide-react";

const activities = [
  { icon: Paperclip,   text: "You uploaded a new", bold: "attachment", suffix: "to ERP-9 Links for UI/UX", time: "1 day ago" },
  { icon: MessageSquare, text: "You updated the description of", bold: "WEB-20 Problems", suffix: "", time: "4 days ago" },
  { icon: LayoutGrid,  text: "You set the state to", bold: "Done", suffix: "for WEB-6 Loading Animation", time: "4 days ago" },
  { icon: LayoutGrid,  text: "You set the state to", bold: "Done", suffix: "for WEB-20 Problems", time: "4 days ago" },
  { icon: MessageSquare, text: "You updated the description of", bold: "ERP-4 Development of Form Builder", suffix: "", time: "12 days ago" },
  { icon: LayoutGrid,  text: "You set the state to", bold: "In Progress", suffix: "for ERP-5 DMS Structure", time: "14 days ago" },
];

export default function IssueActivitiesField({ field }) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <h3 className="font-semibold text-gray-800 mb-4">{field.label || "Your issue activities"}</h3>
      <div className="space-y-4">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="flex gap-3">
              <Icon size={16} className="text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-gray-600">
                  {a.text} <strong className="text-gray-800 font-semibold">{a.bold}</strong> {a.suffix}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-4 text-xs text-indigo-500 hover:text-indigo-700 w-full text-center">
        View all
      </button>
    </div>
  );
}