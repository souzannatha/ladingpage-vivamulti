import { Button } from "./button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent md:px-36 md:py-7">
      <div>
        <Image
          className="block"
          src="/logo-vivamulti.svg"
          alt="logo da Viva Multi"
          width={150}
          height={40}
        />
      </div>

      <div className="md:hidden">
        <button id="menu-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex gap-6">
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

      {/* Botões no desktop */}
      <div className="hidden md:flex gap-3">
        <a href="https://api.whatsapp.com/send?phone=554337721333">
          <Button variant="outline">Quero ser Parceiro</Button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=554337721333">
          <Button variant="primary">Quero meu cartão</Button>
        </a>
      </div>
    </nav>
  );
}
