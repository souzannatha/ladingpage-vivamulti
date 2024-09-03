import { CardDownload } from "./card-download";
import Image from "next/image";

export function SectionDownload() {
  return (
    <div className="w-[1540px] h-[700px] bg-[#15B3CC] my-32 mx-auto rounded-3xl flex items-center justify-between px-24 overflow-hidden mb-20">
      <div className="w-[590px]">
        <h2 className="text-white text-[52px] font-medium">
          <span className="font-bold">Baixe o nosso app</span> agora e seja o
          primeiro a aproveitar todos os{" "}
          <span className="font-bold">benefícios do Cartão Viva Multi!</span>
        </h2>
        <div className="flex items-center gap-4 mt-8">
          <CardDownload iconSrc="/icon-apple.svg" platformName="Apple Store" />
          <CardDownload
            iconSrc="/icon-playstore.svg"
            platformName="Google Play"
          />
        </div>
      </div>
      {/* Contêiner relativo para posicionamento absoluto das imagens */}
      <div className="relative mt-28">
        {/* Imagem do logo (no fundo) */}
        <Image
          src="/icon-vivamulti.svg"
          width={900}
          height={900}
          alt="logo Viva Multi"
          className="absolute top-0 left-0"
        />
        <Image
          src="/celphone.svg"
          width={700}
          height={700}
          alt="imagem do celular"
          className="relative z-10"
        />
      </div>
    </div>
  );
}
