import { Button } from "./button";
import Image from "next/image";

export function PlansCardFamily() {
  return (
    <div className="w-[500px] h-[580px] bg-white rounded-[20px] p-16 flex flex-col justify-between mobile:w-[300px] mobile:h-[350px] mobile:p-16">
      <div className="w-[340px] mobile:w-full">
        <div className="flex items-center justify-center gap-2 bg-orange-600 w-44 h-12 rounded-[20px] mobile:w-32 mobile:h-8 mobile:p-3 mobile:rounded-xl mobile:-mt-10">
          <Image
            height={20}
            width={20}
            src="/fire-icon.svg"
            alt="icon fire"
            className="mobile:w-4 mobile:h-4"
          />
          <p className="text-white font-medium mobile:text-xs">Mais popular</p>
        </div>
        <span className="block text-2xl text-blueCustom-blue01 mobile:text-xl">
          Plano
        </span>
        <h3 className="text-4xl font-bold text-blueCustom-blue01 mobile:text-3xl">
          Familiar
        </h3>
        <p className="mt-5 text-2xl text-blueCustom-blueBlack mobile:text-base">
          A partir de <span className="font-bold">R$0,19</span> por dia.
          Consultas a <span className="font-bold">R$59,90</span>,<br /> acesso a{" "}
          <span className="font-bold">hospitais</span> 24h e descontos.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <a href="https://api.whatsapp.com/send?phone=554337721333">
          <Button variant="primary">Assinar agora</Button>
        </a>
      </div>
    </div>
  );
}
