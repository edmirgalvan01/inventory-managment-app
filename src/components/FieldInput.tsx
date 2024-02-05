interface Props {
  label: string;
  placeholder: string;
  disabled: boolean;
  type: "text" | "number" | "email" | "password" | "date";
  handleClick: React.MouseEventHandler<HTMLInputElement>;
}

export function FieldInput({
  label,
  placeholder,
  disabled = false,
  type,
  handleClick,
}: Props) {
  return (
    <label className="min-w-[300px] flex flex-col gap-1 text-medium-blue text-sm font-semibold">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onClick={handleClick}
        className="bg-transparent border-light-blue border-2 rounded-[8px] p-3 outline-none placeholder:italic "
      />
    </label>
  );
}

interface SelectProps {
  label: string;
  disabled: boolean;
  handleClick: React.MouseEventHandler<HTMLSelectElement>;
}

export function FieldSelect({
  label,
  disabled = false,
  handleClick,
}: SelectProps) {
  return (
    <label className="min-w-[300px] flex flex-col gap-1 text-medium-blue text-sm font-semibold">
      {label}
      <select
        disabled={disabled}
        onClick={handleClick}
        className="bg-transparent border-light-blue border-2 rounded-[8px] p-3 outline-none placeholder:italic "
      >
        <option value="kgs">Kgs</option>
        <option value="grs">Grs</option>
        <option value="lts">Lts</option>
        <option value="pzs">Pzs</option>
      </select>
    </label>
  );
}
