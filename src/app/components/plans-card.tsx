import { Button } from "./button";
import Image from "next/image";

export function PlansCard() {
  return (
    <div className="w-[500px] h-[580px] bg-white rounded-[20px] p-16 flex flex-col justify-between">
      <div className="text-start w-[340px]">
        <div className="flex items-center justify-center gap-2 bg-orange-600 w-44 h-12 rounded-[20px] mb-5">
          <Image height={20} width={20} src="/fire-icon.svg" alt="icon fire" />
          <p className="text-white font-medium">Mais popular</p>
        </div>
        <span className="block text-2xl text-blueCustom-blue01">Plano</span>
        <h3 className="text-4xl font-bold text-blueCustom-blue01">Familiar</h3>
        <p className="mt-5 text-2xl text-blueCustom-blueBlack">
          A partir de <span className="font-bold">R$0,19</span> por dia.
          Consultas a <span className="font-bold">R$59,90</span>, acesso a{" "}
          <span className="font-bold">hospitais</span> 24h e descontos.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="primary">Assinar agora</Button>
      </div>
    </div>
  );
}
