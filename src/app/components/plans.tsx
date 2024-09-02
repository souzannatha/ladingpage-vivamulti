import Image from "next/image";
import { PlansCard } from "./plans-card";

export function Plans() {
  return (
    <div
      className="w-full h-[1050px] bg-blueCustom-blue01 flex items-start" // Adicione flex e items-start
      style={{
        backgroundImage: 'url("/bg-plans.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ml-36 mt-[100px] mb-[75px]">
        <span className="font-medium text-xl text-white">Nossos Planos</span>
        <h2 className="font-bold text-[52px] text-white mb-6">
          Planos que cabem <br /> no seu bolso
        </h2>
        <div className="flex flex-row ">
          <Image src="/mulher-1.svg" width={560} height={626} alt="mulher" />
          <div className="flex ml-5 gap-6">
            <PlansCard />
            <PlansCard />
          </div>
        </div>
      </div>
    </div>
  );
}
