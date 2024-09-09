import Image from "next/image";
import { SlidesBenefits } from "./slides-benefits";
import { BenefitsCard } from "./benefits-card";

export function BenefitsSession() {
  return (
    <section className="flex flex-col justify-between items-start mt-[100px] mobile:mt-20">
      <div className="ml-36 mb-8  mobile:ml-8 mobile:w-80 mobile:h-16">
        <h3 className="text-blueCustom-blue05 font-medium text-xl mobile:text-sm">
          Benefícios Exclusivos
        </h3>
        <h2 className="text-blueCustom-blue01 font-bold text-[52px] mobile:text-3xl">
          Por que escolher <br />o Cartão Viva Multi
        </h2>
        <div className="mt-6 mobile:mt-14">
          <SlidesBenefits />
          <div className="flex overflow-x-auto space-x-4 mt-9 mobile:gap-4 mobile:scrollbar-hideen">
            <div>
              <BenefitsCard
                imageSrc="/icons-person.svg"
                altText="ícone de pessoa"
                title="Atendimento Humanizado"
                description="Receba atendimento personalizado e acolhedor, sempre."
              />
            </div>
            <div>
              <BenefitsCard
                imageSrc="/icon-plans.svg"
                altText="ícone plano"
                title="Planos Acessíveis"
                description="Escolha entre planos gratuitos e premium, a partir de R$0,19 por dia."
              />
            </div>
            <div>
              <BenefitsCard
                imageSrc="/icon-networking.svg"
                altText="ícone plano"
                title="Rede Credenciada"
                description="Acesse uma ampla rede de clínicas, hospitais e especialistas."
              />
            </div>
            <div>
              <BenefitsCard
                imageSrc="/icon-percent.svg"
                altText="ícone plano"
                title="Descontos Exclusivos"
                description="Aproveite descontos em exames, consultas e medicamentos."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-28 mr-44">
        <div className="flex gap-8">
          <Image
            className="block"
            src="/icon-arrow-right.svg"
            alt="logo da Viva Multi"
            width={30}
            height={30}
          />
          <Image
            className="block"
            src="/icon-arrow-left.svg"
            alt="logo da Viva Multi"
            width={30}
            height={30}
          />
        </div>
        <div className="bg-blueCustom-blue02 w-[15px] h-[5px] mt-4"></div>
      </div>
    </section>
  );
}
