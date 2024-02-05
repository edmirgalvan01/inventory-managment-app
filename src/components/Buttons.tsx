interface Props {
  children: React.ReactNode;
}

export function PrimaryButton({ children }: Props) {
  return (
    <button className="h-10 px-4 text-[16px] rounded-md font-semibold bg-medium-blue text-soft-white flex justify-center items-center">
      {children}
    </button>
  );
}

export function SecondaryButton({ children }: Props) {
  return (
    <button className="h-10 px-4 text-[16px] rounded-md font-semibold bg-transparent text-medium-blue flex justify-center items-center border-[2px] border-medium-blue">
      {children}
    </button>
  );
}
