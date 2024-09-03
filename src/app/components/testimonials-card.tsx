import Image from "next/image";

type TestimonialsCardsProps = {
  name: string;
  description: string;
  testimonial: string;
  imageSrc: string;
};

export function TestimonialsCards({
  name,
  description,
  testimonial,
  imageSrc,
}: TestimonialsCardsProps) {
  return (
    <div className="relative flex items-center w-[760px] h-[530px]">
      <div className="relative">
        <Image
          src="quotes.svg"
          width={80}
          height={80}
          alt="Citação"
          className="absolute -top-9 -left-10"
        />
        <Image
          src={imageSrc}
          width={370}
          height={500}
          alt={`Imagem de ${name}`}
        />
      </div>
      <div className="w-[305px] h-[190px] ml-10">
        <h2 className="font-bold text-4xl text-blueCustom-blue05">{name}</h2>
        <h3 className="font-semibold text-xl text-blueCustom-blueBlack mb-2">
          {description}
        </h3>
        <p className="text-lg text-blueCustom-blue05">{testimonial}</p>
      </div>
    </div>
  );
}
