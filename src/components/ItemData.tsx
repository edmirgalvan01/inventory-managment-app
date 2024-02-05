interface Props {
  title: string;
  text: string;
}

export default function ItemData({ title, text }: Props) {
  return (
    <div className="itemData flex justify-between items-center">
      <h1 className="text-lg text-medium-blue font-semibold">{title}</h1>
      <p className="text-sm text-blue ">{text}</p>
    </div>
  );
}
