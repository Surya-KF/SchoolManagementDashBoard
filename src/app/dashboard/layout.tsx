export default function DashbordLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div>dashboard{children}</div>;
  }