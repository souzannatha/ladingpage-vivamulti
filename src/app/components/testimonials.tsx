import { TestimonialsCards } from "./testimonials-card";

export function Testimonial() {
  return (
    <section className="w-[1544px] h-[750px] mx-auto my-auto mobile:ml-7">
      <div className="w-[380px] h-32 mb-20 mobile:w-[250px] mobile:mb-8">
        <p className="font-medium text-xl text-blueCustom-blue05 mobile:text-sm">
          Depoimentos
        </p>
        <h2 className="font-bold text-[52px] text-blueCustom-blue01 mobile:text-3xl">
          O que nossos clientes dizem
        </h2>
      </div>
      <div className="flex justify-between mobile:flex-col">
        <TestimonialsCards
          name="Maria Silva"
          description="Aposentada - Londrina"
          testimonial="O Cartão Viva Multi mudou a minha vida! Agora tenho acesso a saúde de qualidade sem gastar muito."
          imageSrc="/testimonial-person1.svg"
        />
        <TestimonialsCards
          name="João Paulo"
          description="Aposentado - Londrina"
          testimonial="A rede de especialistas é incrível e o atendimento é sempre muito acolhedor."
          imageSrc="/testimonial-person2.svg"
        />
      </div>
    </section>
  );
}
