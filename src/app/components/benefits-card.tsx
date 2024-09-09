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
    <div className="flex flex-col w-[334px] h-[370px] bg-gradient-to-t from-white to-blueCustom-blue04 rounded-[10px] px-8 py-10 mobile:w-52 mobile:h-[320px]">
      <div className="flex flex-col justify-between ">
        {/* Ajuste principal */}
        <div>
          <Image
            className="block w-12 h-12"
            src={imageSrc}
            alt={altText}
            width={75}
            height={75}
          />
          <h2 className="font-bold text-3xl text-blueCustom-blue01 mt-5 mobile:text-2xl mobile:mt-4 mobile:text-start">
            {title}
          </h2>
        </div>
        <p className="font-medium text-lg text-blueCustom-blue05 mt-7 mobile:text-base mobile:mt-5">
          {description}
        </p>
      </div>
    </div>
  );
}
