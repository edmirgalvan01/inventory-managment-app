import {
  IconCoins,
  IconHome,
  IconSettings,
  IconStack3,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const page = window.location.pathname;
  return (
    <nav className="absolute bottom-0 left-0 w-full flex justify-between items-center p-[20px] border-t-2 shadow-menu">
      <div className="flex flex-col gap-1">
        <IconHome
          size={28}
          className="text-medium-blue"
          onClick={() => navigate("/")}
        />
        {page === "/" && <div className="h-[3px] w-full bg-medium-blue"></div>}
      </div>
      <div className="flex flex-col gap-1">
        <IconStack3
          size={28}
          className="text-medium-blue"
          onClick={() => navigate("/inventory")}
        />
        {page === "/inventory" && (
          <div className="h-[3px] w-full bg-medium-blue"></div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <IconCoins
          size={28}
          className="text-medium-blue"
          onClick={() => navigate("/sales")}
        />
        {page === "/sales" && (
          <div className="h-[3px] w-full bg-medium-blue"></div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <IconSettings
          size={28}
          className="text-medium-blue"
          onClick={() => navigate("/settings")}
        />
        {page === "/settings" && (
          <div className="h-[3px] w-full bg-medium-blue"></div>
        )}
      </div>
    </nav>
  );
}
