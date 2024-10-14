export default function DashbordLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
      {/* LEFT*/}
      <div className="w-[14%] md:w[8]lg:w-[16%] bg-red-200">l</div>
      {/* RIGHT*/}
      <div className="w-[86%] md[92%] bg-blue-200">r</div>
    </div>;
  }