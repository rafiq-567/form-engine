import FieldCard from "./FieldCard";

export default function DatePickerField() {
  return (
    <FieldCard title="Date Picker">
      <input
        type="date"
        className="w-full border rounded-md px-3 py-2"
      />
    </FieldCard>
  );
}