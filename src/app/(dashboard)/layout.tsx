export default function DashbordLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
      {/* LEFT*/}
      <div className="w-1/6">l</div>
      {/* RIGHT*/}
      <div className="w-5/6">r</div>
    </div>;
  }