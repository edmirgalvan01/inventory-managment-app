import { IconArrowLeft, IconHome } from "@tabler/icons-react";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <header className="pageHeader flex w-full justify-between items-center">
      <a onClick={() => {}}>
        <IconArrowLeft className="text-blue" />
      </a>
      <h1 className="text-blue font-medium">{title}</h1>
      <a href="/">
        <IconHome className="text-blue" />
      </a>
    </header>
  );
}
