import Image from "next/image";
import { PlansCardIndividual } from "./plans-individual";
import { PlansCardFamily } from "./plans-family";

export function Plans() {
  return (
    <div
      className="w-full h-[1050px] bg-blueCustom-blue01 flex items-start"
      style={{
        backgroundImage: 'url("/bg-plans.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ml-36 mt-[100px] mb-[75px] mobile:ml-7 ">
        <span className="font-medium text-xl text-white mobile:text-sm">
          Nossos Planos
        </span>
        <h2 className="font-bold text-[52px] text-white mb-6 mobile:text-3xl">
          Planos que cabem <br /> no seu bolso
        </h2>
        <div className="flex flex-row ">
          <Image
            src="/mulher-1.svg"
            width={560}
            height={626}
            alt="mulher"
            className="mobile:hidden"
          />
          <div className="flex ml-5 gap-6 mobile:flex-col">
            <PlansCardFamily />
            <PlansCardIndividual />
          </div>
        </div>
      </div>
    </div>
  );
}
