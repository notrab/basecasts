interface Props {
  children?: React.ReactNode;
}

export default async function EditorLayout({ children }: Props) {
  return <div className="container mx-auto py-8">{children}</div>;
}
