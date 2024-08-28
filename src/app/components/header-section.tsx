import Image from "next/image";

export function HeaderSection() {
  return (
    <section className="flex justify-between items-center ml-36 mt-52">
      <div className="flex flex-col space-y-4 max-w-lg">
        <p className="flex text-blueCustom-blue02 text-xl font-semibold gap-2">
          <Image
            src="/heart-icon.svg"
            alt="Ícone de coração"
            width={20}
            height={20}
          />
          Transforme sua saúde com o Cartão Viva Multi
        </p>
        <h1 className="text-5xl font-bold text-white">
          O futuro da saúde está aqui!
        </h1>
        <p className="text-lg text-white">
          Descubra um novo jeito de cuidar da sua saúde com valores acessíveis e
          atendimento humanizado.
        </p>
        <div className="flex items-center bg-white w-[290px] h-16 px-4 rounded-[10px]">
          <Image
            src="/back-arrow.svg"
            alt="Ícone de seta"
            width={25}
            height={25}
          />
          <div className="ml-3">
            <p className="text-blueCustom-blue01">Cadastre-se agora</p>
            <p className="text-blueCustom-blue01 text-lg font-bold">
              e seja o primeiro a saber!
            </p>
          </div>
        </div>
        <div>
          <div className="flex mt-44 gap-2">
            <Image
              src="/icon-scroll.svg"
              alt="Ícone de scroll"
              width={20}
              height={20}
            />
            <p className="text-blueCustom-blue05 uppercase ">
              Continue Explorando
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-end">
        <Image
          className=" block mr-32 mt-96 "
          src="/icon-wpp.svg"
          alt="Ícone de Whatsapp"
          width={60}
          height={60}
        />
      </div>
    </section>
  );
}
