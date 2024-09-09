import { CardDownload } from "./card-download";
import Image from "next/image";

export function SectionDownload() {
  return (
    <div className="w-[1540px] h-[700px] bg-[#15B3CC] my-32 mx-auto rounded-3xl flex items-center justify-between px-24 overflow-hidden mb-20 mobile:flex-col mobile:w-[350px] mobile:h-[450px] mobile:px-7 mobile:rounded-2xl">
      {/* Texto e botões */}
      <div className="w-[590px] mobile:w-72 flex flex-col justify-center mobile:items-center mobile:text-center mobile:mb-10">
        <h2 className="text-white text-[52px] font-medium mobile:text-2xl mobile:text-start mobile:mt-3">
          <span className="font-bold">Baixe o nosso app</span> agora e seja o
          primeiro a aproveitar todos os{" "}
          <span className="font-bold">benefícios do Cartão Viva Multi!</span>
        </h2>
        <div className="flex items-center gap-4 mt-3">
          <CardDownload iconSrc="/icon-apple.svg" platformName="Apple Store" />
          <CardDownload
            iconSrc="/icon-playstore.svg"
            platformName="Google Play"
          />
        </div>
      </div>

      <div className="relative mt-28 mobile:mt-0 flex items-center justify-center mobile:flex-col">
        <Image
          src="/icon-vivamulti.svg"
          width={900}
          height={900}
          alt="logo Viva Multi"
          className="absolute top-0 left-0 opacity-20 mobile:w-[300px] mobile:h-[350px] mobile:-top-9"
        />
        {/* Imagem do celular */}
        <Image
          src="/celphone.svg"
          width={700}
          height={700}
          alt="imagem do celular"
          className="relative z-10 mobile:w-[350px] mobile:h-[450px] mobile:-top-24"
        />
        250px
      </div>
    </div>
  );
}
