import Image from "next/image";

export function SlidesBenefits() {
  return (
    <div className="relative flex justify-center items-center gap-2">
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
        className="absolute right-[265px] top- flex-1"
      />
    </div>
  );
}
