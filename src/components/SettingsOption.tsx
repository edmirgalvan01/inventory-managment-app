import { IconArrowRight } from "@tabler/icons-react";

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SettingsOption({ icon, children }: Props) {
  return (
    <li className="flex justify-between items-center pb-2 border-b border-gray-300">
      <div className="flex gap-2 justify-center">
        {icon}
        <span className="font-nunito font-semibold text-gray-400">
          {children}
        </span>
      </div>
      <IconArrowRight size={20} stroke={2} className="text-gray-400" />
    </li>
  );
}
