import {
  IconCoins,
  IconHome,
  IconSettings,
  IconStack3,
} from "@tabler/icons-react";

export function Navbar() {
  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-between items-center p-[20px] border-t-2 shadow-menu">
      <IconHome size={28} className="text-medium-blue" />
      <IconStack3 size={28} className="text-medium-blue" />
      <IconCoins size={28} className="text-medium-blue" />
      <IconSettings size={28} className="text-medium-blue" />
    </div>
  );
}
