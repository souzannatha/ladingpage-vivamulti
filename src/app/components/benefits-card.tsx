import Image from "next/image";

interface BenefitsCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

export function BenefitsCard({
  imageSrc,
  altText,
  title,
  description,
}: BenefitsCardProps) {
  return (
    <div className="flex flex-col w-[334px] h-[370px] bg-gradient-to-t from-white to-blueCustom-blue04 rounded-[10px] px-9 py-14">
      <div className="flex flex-col items-start">
        <Image
          className="block"
          src={imageSrc}
          alt={altText}
          width={75}
          height={75}
        />
        <h2 className="font-bold text-3xl text-blueCustom-blue01 mt-5">
          {title}
        </h2>
        <p className="font-medium text-lg text-blueCustom-blue05 mt-7">
          {description}
        </p>
      </div>
    </div>
  );
}
