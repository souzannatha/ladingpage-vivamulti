import { AccordionList } from "./accordion-list";
import { Button } from "./button";

export function FaqSection() {
  return (
    <section className="flex flex-col mobile:flex-col mobile:items-center w-[1544px] h-[750px] mx-auto my-auto mobile:w-[415px] mobile:h-auto">
      {/* 1 - FAQ e Dúvidas Frequentes */}
      <div className="w-[250px] mb-20 mt-24 mobile:mt-5 mobile:order-1 mobile:-ml-28">
        <p className="font-medium text-xl text-blueCustom-blue05 mobile:text-sm">
          FAQ
        </p>
        <h2 className="font-bold text-[52px] text-blueCustom-blue01 mobile:text-3xl">
          Dúvidas frequentes
        </h2>
      </div>

      {/* 2 - Accordion List */}
      <div className="ml-16 flex flex-col justify-center mobile:ml-0 mobile:w-full mobile:order-2">
        <AccordionList
          isFirst
          title="O que é o Viva Multi + Saúde?"
          answer="O Viva Multi + Saúde é um cartão assistencial que proporciona aos seus membros acesso a descontos significativos em uma vasta gama de serviços de saúde, incluindo consultas médicas, exames, procedimentos e medicamentos, em uma extensa rede de parceiros credenciados."
        />
        <AccordionList
          title="Quais são os planos disponíveis?"
          answer="Oferecemos dois planos: o Plano Individual, destinado a uma única pessoa, e o Plano Familiar, que permite a inclusão de até 3 dependentes, sejam eles cônjuges, filhos, pais ou sogros."
        />
        <AccordionList
          title="Como faço para me cadastrar?"
          answer="O Viva Multi + Saúde é um cartão assistencial que proporciona aos seus membros acesso a descontos significativos em uma vasta gama de serviços de saúde, incluindo consultas médicas, exames, procedimentos e medicamentos, em uma extensa rede de parceiros credenciados."
        />
        <AccordionList
          title="Existe um limite de uso do cartão?"
          answer="Não há um limite de uso para o cartão Viva Multi + Saúde. Os titulares podem usufruir dos descontos em serviços de saúde quantas vezes precisarem, respeitando as condições de cada serviço ou prestador credenciado."
        />
        <AccordionList
          title="Posso usar o cartão imediatamente após a adesão?"
          answer="Após a confirmação da adesão e processamento do seu pagamento, você receberá uma confirmação que permite começar a usar o cartão Viva Multi + Saúde imediatamente em nossa rede credenciada."
        />
      </div>

      {/* 3 - "Ainda tem dúvidas? Vamos conversar" */}
      <div className="w-[300px] mb-20 mt-24 mobile:mt-12 mobile:order-3 mobile:text-center mobile:flex mobile:flex-col mobile:items-center">
        <h2 className="mt-9 mb-3 font-semibold text-2xl text-blueCustom-blue05 mobile:text-lg">
          Ainda tem dúvidas? Vamos conversar.
        </h2>
        <p className="font-medium text-lg text-blueCustom-blue05 mb-24 mobile:text-base">
          Se você tem alguma dúvida, sugestão ou até mesmo uma reclamação, entre
          em contato. Queremos te ouvir.
        </p>
        <Button variant="primary">Mandar Mensagem</Button>
      </div>
    </section>
  );
}
