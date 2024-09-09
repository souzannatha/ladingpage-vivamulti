import { AccordionList } from "./accordion-list";
import { Button } from "./button";

export function FaqSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center w-full lg:w-[1544px] h-auto lg:h-[750px] mx-auto my-auto">
      {/* FAQ e "Ainda tem dúvidas" */}
      <div className="flex flex-col w-full mobile:w-[300px] mb-10  lg:mb-20 mt-8 lg:mt-24 lg:order-none order-1 text-center lg:text-left ">
        <div className="text-left mobile:text-left mobile:-ml-6 lg:ml-0">
          <p className="font-medium text-xl text-blueCustom-blue05">FAQ</p>
          <h2 className="font-bold text-[30px] lg:text-[50px] text-blueCustom-blue01">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="lg:hidden flex flex-col items-center">
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
        <h2 className="mt-9 mb-3 font-semibold text-2xl lg:text-xl text-blueCustom-blue05 lg:block">
          Ainda tem dúvidas? Vamos conversar.
        </h2>
        <p className="font-medium text-lg text-blueCustom-blue05 mb-6 lg:mb-24 lg:block">
          Se você tem alguma dúvida, sugestão ou até mesmo uma reclamação, entre
          em contato. Queremos te ouvir.
        </p>
        <div className="flex justify-center lg:justify-start  lg:flex">
          <Button variant="primary">Mandar Mensagem</Button>
        </div>
      </div>
      <div className="w-full lg:w-auto lg:ml-16 flex flex-col lg:flex-col justify-center lg:order-3 order-2">
        <div className="hidden lg:flex flex-col">
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
      </div>
    </section>
  );
}
