import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function FieldInput({ label, ...rest }: InputProps) {
  return (
    <label className="min-w-[300px] flex flex-col gap-1 text-medium-blue text-sm font-semibold">
      {label}
      <input
        {...rest}
        className="font-nunito bg-transparent border-light-blue border-2 rounded-[8px] p-3 outline-none placeholder:italic "
      />
    </label>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<{
    value: string;
    label: string;
  }>;
  label: string;
}

export function FieldSelect({ options = [], label, ...rest }: SelectProps) {
  return (
    <label className="min-w-[300px] flex flex-col gap-1 text-medium-blue text-sm font-semibold">
      {label}
      <select
        className="font-nunito bg-transparent border-light-blue border-2 rounded-[8px] p-3 outline-none placeholder:italic "
        {...rest}
      >
        <option defaultChecked>Selecciona</option>
        {options?.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
