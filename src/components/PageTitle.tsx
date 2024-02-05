import { IconArrowLeft, IconHome } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  const navigate = useNavigate();

  return (
    <header className="pageHeader flex w-full justify-between items-center">
      <a onClick={() => navigate(-1)}>
        <IconArrowLeft className="text-blue" />
      </a>
      <h1 className="text-blue font-medium">{title}</h1>
      <Link to="/">
        <IconHome className="text-blue" />
      </Link>
    </header>
  );
}
