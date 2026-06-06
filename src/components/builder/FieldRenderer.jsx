"use client";

// import useFormStore from "@/store/formStore";
import { fieldRegistry } from "../lib/fieldRegistry";
import useFormStore from "../store/formStore";
// import { fieldRegistry } from "@/lib/fieldRegistry";

export default function FieldRenderer({ field }) {
    const selectField = useFormStore((state) => state.selectField);

    const Component =
        fieldRegistry[field.type];

    return (
        <div
            onClick={() =>
                selectField(field.id)
            }
            className="border rounded p-4 cursor-pointer"
        >
            <Component field={field} />
        </div>
    );
}