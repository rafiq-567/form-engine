import { create } from "zustand";

const useFormStore = create((set) => ({
  fields: [],

  selectedField: null,

  addField: (field) =>
    set((state) => ({
      fields: [...state.fields, field],
      
    })),

  selectField: (id) =>
    set({
      selectedField: id,
    }),

  updateField: (id, values) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === id
          ? { ...field, ...values }
          : field
      ),
    })),

  removeField: (id) =>
    set((state) => ({
      fields: state.fields.filter(
        (field) => field.id !== id
      ),
    })),

      reorderFields: (fields) => set({ fields }),
}));

export default useFormStore;