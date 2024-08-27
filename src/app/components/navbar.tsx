import Image from "next/image";
import { Button } from "./button";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-36 py-7 bg-transparent">
      <div>
        <Image
          className="block"
          src="/logo-vivamulti.svg"
          alt="logo da Viva Multi"
          width={242}
          height={60}
        />
      </div>
      <div className="flex gap-24">
        <a href="#" className="text-white font-semibold">
          Quem somos
        </a>
        <a href="#" className="text-white font-semibold">
          Dúvidas Frequentes
        </a>
        <a href="#" className="text-white font-semibold">
          Rede de Parceiros
        </a>
      </div>
      <div className="flex gap-3">
        <Button variant="outline"> Quero ser Parceiro</Button>
        <Button variant="primary">Quero meu Multi</Button>
      </div>
    </nav>
  );
}
