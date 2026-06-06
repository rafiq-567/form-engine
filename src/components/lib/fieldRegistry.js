
import BoxField from "../fields/BoxField";
import BreadcrumbField from "../fields/BreadcrumbField";
import ButtonField from "../fields/ButtonField";
import ButtonGroupField from "../form-builder/ButtonGroupField";
import CardField from "../fields/CardField";
import CheckboxField from "../fields/CheckboxField";
import CircularProgressField from "../fields/CircularProgressField";
import ContainerField from "../fields/ContainerField";
import DatePickerField from "../form-builder/DatePickerField";
import DateRangeField from "../fields/DateRangeField";
import DialogField from "../fields/DialogField";
import EmailField from "../fields/EmailField";
import FormControlField from "../fields/FormControlField";
import FormLabelField from "../fields/FormLabelField";
import LinearProgressField from "../fields/LinearProgressField";
import LinkField from "../fields/LinkField";
import ListField from "../fields/ListField";
import ListItemField from "../fields/ListItemField";
import PasswordField from "../fields/PasswordField";
import RadioGroupField from "../fields/RadioGroupField";
import RadioTilesField from "../fields/RadioTilesField";
import StackField from "../fields/StackField";
import SwitchField from "../fields/SwitchField";
import TableField from "../fields/TableField";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import TimePickerField from "../fields/TimePickerField";
import TimeRangeField from "../fields/TimeRangeField";
import TooltipField from "../fields/TooltipField";
import TypographyField from "../fields/TypographyField";
import UploadField from "../fields/UploadField";


// Templates
// import EmbedField from "../components/fields/EmbedField";
// import SlotField from "../components/fields/SlotField";
// import TestField from "../components/fields/TestField";

// // Structure
// import RepeaterField from "../components/fields/RepeaterField";

// // Modal
// import ModalField from "../components/fields/ModalField";

// // Typography
// import HeadingField from "../components/fields/HeadingField";
// import ParagraphField from "../components/fields/ParagraphField";
// // import BlockquoteField from "../components/fields/BlockquoteField";
// import CodeBlockField from "../components/fields/CodeBlockField";
// import OrderedListField from "../components/fields/OrderedListField";
// import UnorderedListField from "../components/fields/UnorderedListField";
// import DividerField from "../components/fields/DividerField";
// import CaptionField from "../components/fields/CaptionField";
import BlockquoteField from "../fields/BlockquoteField";
import EmbedField from "../fields/EmbedField";
import SlotField from "../fields/SlotField";
import TestField from "../fields/TestField";
import RepeaterField from "../fields/RepeaterField";
import ModalField from "../fields/ModalField";
import HeadingField from "../fields/HeadingField";
import ParagraphField from "../fields/ParagraphField";
import CodeBlockField from "../fields/CodeBlockField";
import OrderedListField from "../fields/OrderedListField";
import UnorderedListField from "../fields/UnorderedListField";
import DividerField from "../fields/DividerField";
import CaptionField from "../fields/CaptionField";
import CollaboratorsField from "../fields/CollaboratorsField";
import RecentProjectsField from "../fields/RecentProjectsField";
import IssueActivitiesField from "../fields/IssueActivitiesField";
import AssignedByPriorityField from "../fields/AssignedByPriorityField";
import AssignedByStateField from "../fields/AssignedByStateField";
import CreatedByYouField from "../fields/CreatedByYouField";
import AssignedToYouField from "../fields/AssignedToYouField";
import StatsBarField from "../fields/StatsBarField";

export const fieldRegistry = {
  // Inputs
  text: TextField,
  email: EmailField,
  password: PasswordField,
  textarea: TextareaField,
  checkbox: CheckboxField,
  radioGroup: RadioGroupField,
  radioTiles: RadioTilesField,
  switch: SwitchField,
  datePicker: DatePickerField,
  dateRange: DateRangeField,
  timePicker: TimePickerField,
  timeRange: TimeRangeField,
  upload: UploadField,
  // Actions
  button: ButtonField,
  buttonGroup: ButtonGroupField,
  // Data Display
  list: ListField,
  listItem: ListItemField,
  tooltip: TooltipField,
  typography: TypographyField,
  table: TableField,
  // Feedback
  circularProgress: CircularProgressField,
  linearProgress: LinearProgressField,
  // Layout
  box: BoxField,
  container: ContainerField,
  dialog: DialogField,
  stack: StackField,
  // Surfaces
  card: CardField,
  // Navigation
  breadcrumb: BreadcrumbField,
  link: LinkField,
  // Form
  formControl: FormControlField,
  formLabel: FormLabelField,

  
  // Templates
  embed: EmbedField,
  slot: SlotField,
  test: TestField,

  // Structure
  repeater: RepeaterField,

  // Modal
  modal: ModalField,

  // Typography
  heading: HeadingField,
  paragraph: ParagraphField,
  blockquote: BlockquoteField,
  codeBlock: CodeBlockField,
  orderedList: OrderedListField,
  unorderedList: UnorderedListField,
  divider: DividerField,
  caption: CaptionField,

  statsBar: StatsBarField,
assignedToYou: AssignedToYouField,
createdByYou: CreatedByYouField,
assignedByState: AssignedByStateField,
assignedByPriority: AssignedByPriorityField,
issueActivities: IssueActivitiesField,
recentProjects: RecentProjectsField,
collaborators: CollaboratorsField,
};