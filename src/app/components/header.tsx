import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div
      className="bg-cover bg-center h-[992px] w-full"
      style={{ backgroundImage: "url('/background-header.svg')" }}
    >
      {children}
    </div>
  );
}
