import { Button } from "./button";
import Image from "next/image";

export function PlansCardIndividual() {
  return (
    <div className="w-[500px] h-[580px] bg-white rounded-[20px] p-16 flex flex-col justify-between mobile:w-[300px] mobile:h-[350px] mobile:p-16">
      <div className="w-[340px] mobile:w-full mobile:-mt-10">
        <span className="block text-2xl text-blueCustom-blue01 mobile:text-xl">
          Plano
        </span>
        <h3 className="text-4xl font-bold text-blueCustom-blue01 mobile:text-3xl mobile:text-start">
          Individual
        </h3>
        <p className="mt-5 text-2xl text-blueCustom-blueBlack mobile:text-base">
          A partir de <span className="font-bold">R$0,49</span> por dia.
          Consultas a <span className="font-bold">R$59,90</span>
          <br />
          <span className="font-bold">concierge 24h</span> teleconsultas e muito
          mais.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="primary">Assinar agora</Button>
      </div>
    </div>
  );
}
