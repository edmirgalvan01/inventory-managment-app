interface Props {
  label: string;
  placeholder: string;
  disabled: boolean;
  type: "text" | "number" | "email" | "password" | "date";
  required: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function FieldInput({
  label,
  placeholder,
  disabled = false,
  type,
  required = false,
  handleChange,
}: Props) {
  return (
    <label className="min-w-[300px] flex flex-col gap-1 text-medium-blue text-sm font-semibold">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        className="font-nunito bg-transparent border-light-blue border-2 rounded-[8px] p-3 outline-none placeholder:italic "
      />
    </label>
  );
}

interface SelectProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  label: string;
  disabled: boolean;
  required: boolean;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export function FieldSelect({
  options,
  label,
  disabled = false,
  required = false,
  handleChange,
}: SelectProps) {
  return (
    <label className="min-w-[300px] flex flex-col gap-1 text-medium-blue text-sm font-semibold">
      {label}
      <select
        disabled={disabled}
        required={required}
        onChange={handleChange}
        className="font-nunito bg-transparent border-light-blue border-2 rounded-[8px] p-3 outline-none placeholder:italic "
      >
        <option defaultChecked>Selecciona</option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
