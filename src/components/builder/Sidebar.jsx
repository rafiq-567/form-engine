"use client";

import { v4 as uuid } from "uuid";
import { useState } from "react";
import useFormStore from "../store/formStore";
import {
  Type, Mail, Lock, Calendar, CalendarRange, Clock,
  Upload, CheckSquare, CircleDot, ToggleLeft, List,
  FileText, MousePointerClick, AlignJustify, Table,
  MessageCircle, Activity, Minus, Box, Container,
  Monitor, Layers, CreditCard, Navigation, Link,
  FormInput, Tag, ListOrdered, Info, BarChart2,
  ChevronDown, ChevronRight,
   Code, FlaskConical, RefreshCw, Expand,
  Heading1, Quote, AlignCenter,
} from "lucide-react";

const sections = [
  {
    title: "Inputs",
    items: [
      { type: "text",         label: "Text",        icon: Type,             color: "text-blue-500",   bg: "bg-blue-50" },
      { type: "email",        label: "Email",       icon: Mail,             color: "text-sky-500",    bg: "bg-sky-50" },
      { type: "password",     label: "Password",    icon: Lock,             color: "text-gray-500",   bg: "bg-gray-100" },
      { type: "textarea",     label: "Textarea",    icon: FileText,         color: "text-violet-500", bg: "bg-violet-50" },
      { type: "checkbox",     label: "Checkbox",    icon: CheckSquare,      color: "text-green-500",  bg: "bg-green-50" },
      { type: "radioGroup",   label: "Radio",       icon: CircleDot,        color: "text-pink-500",   bg: "bg-pink-50" },
      { type: "radioTiles",   label: "Tiles",       icon: CircleDot,        color: "text-fuchsia-500",bg: "bg-fuchsia-50" },
      { type: "switch",       label: "Switch",      icon: ToggleLeft,       color: "text-teal-500",   bg: "bg-teal-50" },
      { type: "datePicker",   label: "Date",        icon: Calendar,         color: "text-orange-500", bg: "bg-orange-50" },
      { type: "dateRange",    label: "Date Range",  icon: CalendarRange,    color: "text-amber-500",  bg: "bg-amber-50" },
      { type: "timePicker",   label: "Time",        icon: Clock,            color: "text-cyan-500",   bg: "bg-cyan-50" },
      { type: "timeRange",    label: "Time Range",  icon: Clock,            color: "text-indigo-500", bg: "bg-indigo-50" },
      { type: "upload",       label: "Upload",      icon: Upload,           color: "text-rose-500",   bg: "bg-rose-50" },
    ],
  },
  {
    title: "Actions",
    items: [
      { type: "button",       label: "Button",      icon: MousePointerClick,color: "text-indigo-500", bg: "bg-indigo-50" },
      { type: "buttonGroup",  label: "Group",       icon: List,             color: "text-purple-500", bg: "bg-purple-50" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { type: "list",         label: "List",        icon: ListOrdered,      color: "text-blue-500",   bg: "bg-blue-50" },
      { type: "listItem",     label: "List item",   icon: AlignJustify,     color: "text-sky-500",    bg: "bg-sky-50" },
      { type: "tooltip",      label: "Tooltip",     icon: Info,             color: "text-amber-500",  bg: "bg-amber-50" },
      { type: "typography",   label: "Typogra...",  icon: Type,             color: "text-violet-500", bg: "bg-violet-50" },
      { type: "table",        label: "Table",       icon: Table,            color: "text-teal-500",   bg: "bg-teal-50" },
      { type: "map", label: "Map", icon: Navigation, color: "text-green-600", bg: "bg-green-50" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { type: "circularProgress", label: "Circular ...", icon: Activity,   color: "text-yellow-500", bg: "bg-yellow-50" },
      { type: "linearProgress",   label: "Linear pr...", icon: Minus,      color: "text-orange-400", bg: "bg-orange-50" },
    ],
  },
  {
    title: "Layout",
    items: [
      { type: "box",          label: "Box",         icon: Box,              color: "text-green-500",  bg: "bg-green-50" },
      { type: "container",    label: "Container",   icon: Container,        color: "text-emerald-500",bg: "bg-emerald-50" },
      { type: "dialog",       label: "Dialog la...", icon: Monitor,         color: "text-cyan-500",   bg: "bg-cyan-50" },
      { type: "stack",        label: "Stack",       icon: Layers,           color: "text-blue-400",   bg: "bg-blue-50" },
    ],
  },
  {
    title: "Surfaces",
    items: [
      { type: "card",         label: "Card",        icon: CreditCard,       color: "text-sky-500",    bg: "bg-sky-50" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { type: "breadcrumb",   label: "Breadcru...", icon: Navigation,       color: "text-indigo-400", bg: "bg-indigo-50" },
      { type: "link",         label: "Link",        icon: Link,             color: "text-blue-500",   bg: "bg-blue-50" },
    ],
  },
  {
    title: "Form",
    items: [
      { type: "formControl",  label: "Form co...",  icon: FormInput,        color: "text-pink-500",   bg: "bg-pink-50" },
      { type: "formLabel",    label: "Form label",  icon: Tag,              color: "text-rose-500",   bg: "bg-rose-50" },
    ],
  },{
    title: "Templates",
    items: [
      { type: "embed",        label: "Embed...",    icon: Code,             color: "text-red-500",    bg: "bg-red-50" },
      { type: "slot",         label: "Slot",        icon: Box,              color: "text-orange-500", bg: "bg-orange-50" },
      { type: "test",         label: "Test",        icon: FlaskConical,     color: "text-yellow-600", bg: "bg-yellow-50" },
    ],
  },
  {
    title: "Structure",
    items: [
      { type: "repeater",     label: "Repeater",    icon: RefreshCw,        color: "text-green-500",  bg: "bg-green-50" },
    ],
  },
  {
    title: "Modal",
    items: [
      { type: "modal",        label: "Modal",       icon: Expand,           color: "text-violet-500", bg: "bg-violet-50" },
    ],
  },
  {
    title: "Typography",
    items: [
      { type: "heading",      label: "Heading",     icon: Heading1,         color: "text-blue-600",   bg: "bg-blue-50" },
      { type: "paragraph",    label: "Paragraph",   icon: AlignJustify,     color: "text-gray-500",   bg: "bg-gray-100" },
      { type: "blockquote",   label: "Blockquo...", icon: Quote,            color: "text-indigo-500", bg: "bg-indigo-50" },
      { type: "codeBlock",    label: "Code blo...", icon: Code,             color: "text-emerald-600",bg: "bg-emerald-50" },
      { type: "orderedList",  label: "Ordered ...", icon: ListOrdered,      color: "text-sky-500",    bg: "bg-sky-50" },
      { type: "unorderedList",label: "Unorder...",  icon: List,             color: "text-cyan-500",   bg: "bg-cyan-50" },
      { type: "divider",      label: "Divider",     icon: Minus,            color: "text-orange-400", bg: "bg-orange-50" },
      { type: "caption",      label: "Caption",     icon: AlignCenter,      color: "text-teal-500",   bg: "bg-teal-50" },
    ],
  },
  {
  title: "Dashboard",
  items: [
    { type: "statsBar",          label: "Stats Bar",       icon: BarChart2,    color: "text-blue-500",   bg: "bg-blue-50" },
    { type: "assignedToYou",     label: "Assigned...",     icon: CheckSquare,  color: "text-indigo-500", bg: "bg-indigo-50" },
    { type: "createdByYou",      label: "Created...",      icon: FileText,     color: "text-violet-500", bg: "bg-violet-50" },
    { type: "assignedByState",   label: "By State",        icon: Activity,     color: "text-green-500",  bg: "bg-green-50" },
    { type: "assignedByPriority",label: "By Priority",     icon: BarChart2,    color: "text-orange-500", bg: "bg-orange-50" },
    { type: "issueActivities",   label: "Activities",      icon: List,         color: "text-sky-500",    bg: "bg-sky-50" },
    { type: "recentProjects",    label: "Projects",        icon: Layers,       color: "text-pink-500",   bg: "bg-pink-50" },
    { type: "collaborators",     label: "Collaborators",   icon: Monitor,      color: "text-teal-500",   bg: "bg-teal-50" },
  ],
},
];

function SidebarSection({ section, onAdd }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-gray-50"
      >
        {section.title}
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>

      {open && (
        <div className="grid grid-cols-2 gap-2 px-3 pb-3">
          {section.items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.type}
                onClick={() => onAdd(item)}
                className="flex items-center gap-2 px-2 py-2 border rounded-lg text-xs text-gray-700 hover:bg-slate-50 hover:border-gray-300 transition text-left"
              >
                <span className={`${item.bg} ${item.color} p-1 rounded`}>
                  <Icon size={14} />
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const addField = useFormStore((state) => state.addField);
  const [search, setSearch] = useState("");

  const handleAdd = (item) => {
    addField({ id: uuid(), type: item.type, label: item.label });
  };

  const filtered = search.trim()
    ? [
        {
          title: "Results",
          items: sections
            .flatMap((s) => s.items)
            .filter((i) => i.label.toLowerCase().includes(search.toLowerCase())),
        },
      ]
    : sections;

  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col overflow-hidden">
      <div className="p-3 border-b">
        <h2 className="font-semibold text-sm mb-2">Fields</h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </div>

      <div className="overflow-y-auto flex-1">
        {filtered.map((section) => (
          <SidebarSection key={section.title} section={section} onAdd={handleAdd} />
        ))}
      </div>
    </aside>
  );
}