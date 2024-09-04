import React from "react";
import Image from "next/image";
import { Button } from "./button";

export function FinalCall() {
  return (
    <section className="relative flex justify-between items-center w-screen p-4">
      {/* Coluna 1: Imagem sobreposta */}
      <div className="relative flex-1 flex">
        <div className="relative flex">
          {/* Primeira imagem de símbolos, afastada para a esquerda */}
          <Image
            src="/part-of-symbols.svg"
            alt="símbolos do Viva Multi"
            width={200}
            height={200}
            className="absolute -left-[65px] top-0"
          />
          {/* Segunda imagem de símbolos */}
          <Image
            src="/symbols-vivamulti.svg"
            alt="símbolos do Viva Multi"
            width={590}
            height={430}
            className="relative z-0"
          />
          {/* Imagem sobreposta */}
          <Image
            src="/person-finalcall.svg"
            alt="Mulher"
            width={360}
            height={480}
            className="absolute -top-10 left-16 z-20"
          />
        </div>
      </div>

      {/* Coluna 2: Texto e Botão */}
      <div className="flex-1 flex items-center flex-col text-center px-4">
        <p className="font-medium text-xl text-blueCustom-blue05 mb-4">
          Quero fazer parte
        </p>
        <h2 className="font-bold text-[52px] text-blueCustom-blue01 w-[750px] mb-9">
          Prepare-se para uma nova experiência em saúde!
        </h2>
        <Button variant="primary">Quero me cadastrar</Button>
      </div>

      {/* Coluna 3: Outra Imagem */}
      <div className="flex-1 -mr-16">
        <Image
          src="/symbols-vivamulti.svg"
          alt="símbolos do Viva Multi"
          width={590}
          height={430}
        />
      </div>
    </section>
  );
}
