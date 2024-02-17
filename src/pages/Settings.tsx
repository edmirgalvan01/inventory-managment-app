import {
  IconCash,
  IconFilter,
  IconStack3,
  IconUser,
} from "@tabler/icons-react";
import { Navbar } from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import { SettingsOption } from "../components/SettingsOption";

export function SettingsPage() {
  return (
    <div className="containerPage">
      <PageTitle title="Configuración" />
      <ul className="flex flex-col gap-5">
        <SettingsOption icon={<IconUser size={22} className="text-gray-400" />}>
          Editar perfil
        </SettingsOption>
        <SettingsOption
          icon={<IconStack3 size={22} className="text-gray-400" />}
        >
          Productos
        </SettingsOption>
        <SettingsOption icon={<IconCash size={22} className="text-gray-400" />}>
          Ventas
        </SettingsOption>
        <SettingsOption
          icon={<IconFilter size={22} className="text-gray-400" />}
        >
          Categorias
        </SettingsOption>
      </ul>
      <Navbar />
    </div>
  );
}
