import { Button } from "./button";

export function PlansCardIndividual() {
  return (
    <div className="w-[500px] h-[580px] bg-white rounded-[20px] p-16 flex flex-col justify-between">
      <div className="text-start w-[340px] mt-8">
        <span className="block text-2xl text-blueCustom-blue01">Plano</span>
        <h3 className="text-4xl font-bold text-blueCustom-blue01">
          Individual
        </h3>
        <p className="mt-5 text-2xl text-blueCustom-blueBlack">
          A partir de <span className="font-bold">R$0,49</span> por dia.
          Consultas a <span className="font-bold">R$59,90</span>, acesso a{" "}
          <span className="font-bold">concierge 24h</span>, teleconsultas e
          muito mais.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="primary">Assinar agora</Button>
      </div>
    </div>
  );
}
