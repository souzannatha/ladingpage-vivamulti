import Image from "next/image";

export function SlidesBenefits() {
  return (
    <div className="relative flex justify-center items-center gap-2 mobile:gap-3">
      <Image
        src="/Rectangle 370.svg"
        alt="imagens de médicos"
        width={500}
        height={570}
        className="flex-1 w-full h-auto"
      />
      <Image
        src="/telemedicina.svg"
        alt="imagens de médicos"
        width={500}
        height={570}
        className="flex-1 w-full h-auto"
      />
      <Image
        src="/Group 43.svg"
        alt="imagens de médicos"
        width={500}
        height={570}
        className="flex-1 w-full h-auto"
      />
      <Image
        src="/icon-next.svg"
        alt="imagens de médicos"
        width={100}
        height={100}
        className="absolute right-[220px] top-[250px] flex-1 mobile:-right-[40px] mobile:-top-12"
      />
    </div>
  );
}
