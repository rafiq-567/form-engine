import ButtonField from "./ButtonField";
import ButtonGroupField from "./ButtonGroupField";
import DatePickerField from "./DatePickerField";
import CheckboxField from "./CheckboxField";

export default function FormPreview() {
  return (
    <div className="space-y-4">
      <ButtonField />
      <ButtonGroupField />
      <DatePickerField />
      <CheckboxField />
    </div>
  );
}