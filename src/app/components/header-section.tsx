import Image from "next/image";

export function HeaderSection() {
  return (
    <section className="flex justify-between items-center ml-36 mt-52 mobile:ml-4 mobile:mt-16">
      <div className="flex flex-row space-x-12 mobile:flex-col mobile:space-x-0">
        {/* Parte do texto */}
        <div className="flex flex-col space-y-4 max-w-lg mobile:space-y-2 mobile:w-[353px] mobile:h-[220px]">
          <p className="flex text-blueCustom-blue02 text-xl font-semibold gap-2 mobile:text-sm">
            <Image
              src="/heart-icon.svg"
              alt="Ícone de coração"
              width={20}
              height={20}
            />
            Transforme sua saúde com o Cartão Viva Multi
          </p>
          <h1 className="text-5xl font-bold text-white mobile:text-3xl">
            O futuro da saúde <br /> está aqui!
          </h1>
          <p className="text-lg text-white mobile:text-sm">
            Descubra um novo jeito de cuidar da sua saúde com valores acessíveis
            e atendimento humanizado.
          </p>
          <div>
            <div className="flex items-center bg-white w-[290px] h-16 px-4 rounded-[10px] mobile:mt-10">
              <Image
                src="/back-arrow.svg"
                alt="Ícone de seta"
                width={25}
                height={25}
                className="mobile: w-[18px] h-[18px]"
              />
              <div className="ml-3">
                <p className="text-blueCustom-blue01">Cadastre-se agora</p>
                <p className="text-blueCustom-blue01 text-lg font-bold">
                  e seja o primeiro a saber!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-44 gap-2 mobile:hidden">
              <Image
                src="/icon-scroll.svg"
                alt="Ícone de scroll"
                width={20}
                height={20}
              />
              <p className="text-blueCustom-blue04 uppercase">
                Continue Explorando
              </p>
            </div>
          </div>
        </div>

        {/* Imagem ao lado do texto */}
        <div className="relative flex items-start mobile:flex-col mobile:items-center">
          {/* Imagem do símbolo por baixo */}
          <Image
            src="/symbol-header.svg"
            alt="Imagem de saúde"
            width={900}
            height={900}
            className="absolute bottom-[390px] left-48 object-cover mobile:relative mobile:w-[600px] mobile:h-[530px] mobile:-left-3 mobile:-bottom-[110px]"
          />
          {/* Imagem da família por cima */}
          <Image
            src="/family-header.svg"
            alt="Imagem de saúde"
            width={900}
            height={500}
            className="relative object-cover bottom-[162px] left-40 mobile:bottom-0 mobile:w-[430px] mobile:h-[475px] mobile:left-0 mobile:-top-[367px]"
          />
        </div>
      </div>

      {/* Ícone de WhatsApp */}
      <div className="absolute inset-0 flex justify-end">
        <Image
          className="block mr-32 mt-96  mobile:relative mobile:top-[270px] left-[120px]"
          src="/icon-wpp.svg"
          alt="Ícone de Whatsapp"
          width={60}
          height={60}
        />
      </div>
    </section>
  );
}
