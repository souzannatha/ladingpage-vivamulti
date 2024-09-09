import React from "react";
import Image from "next/image";
import { Button } from "./button";

export function FinalCall() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center w-screen p-4 lg:p-0">
      {/* Mobile - Ordem específica */}
      <div className="lg:hidden flex flex-col items-center w-full">
        <Image
          src="/symbols-mobile.svg"
          alt="Símbolos do Viva Multi"
          width={414}
          height={150}
          className="mb-4"
        />
        <div className="flex-1 flex flex-col items-center text-center px-4 mb-8">
          <p className="font-medium text-xl text-blueCustom-blue05 mb-4">
            Quero fazer parte
          </p>
          <h2 className="font-bold text-3xl text-blueCustom-blue01 mb-4">
            Prepare-se para uma nova experiência em saúde!
          </h2>
          <Button variant="primary">Quero me cadastrar</Button>
        </div>
        <div className="flex flex-col items-center w-full">
          <Image
            src="/person-finalcall.svg"
            alt="Mulher"
            width={360}
            height={480}
            className="mb-4"
          />
          <Image
            src="/symbols-mobile.svg"
            alt="Símbolos do Viva Multi"
            width={414}
            height={150}
          />
        </div>
      </div>

      {/* Desktop - Ordem específica */}
      <div className="hidden lg:flex flex-row justify-between items-center w-full">
        <div className="relative flex-1 flex">
          <div className="relative flex">
            <Image
              src="/part-of-symbols.svg"
              alt="símbolos do Viva Multi"
              width={200}
              height={200}
              className="absolute -left-[65px] top-0"
            />
            <Image
              src="/symbols-vivamulti.svg"
              alt="símbolos do Viva Multi"
              width={590}
              height={430}
              className="relative z-0"
            />
            <Image
              src="/person-finalcall.svg"
              alt="Mulher"
              width={360}
              height={480}
              className="absolute -top-10 left-16 z-20"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center flex-col text-center px-4">
          <p className="font-medium text-xl text-blueCustom-blue05 mb-4">
            Quero fazer parte
          </p>
          <h2 className="font-bold text-[52px] text-blueCustom-blue01 w-[750px] mb-9">
            Prepare-se para uma nova experiência em saúde!
          </h2>
          <Button variant="primary">Quero me cadastrar</Button>
        </div>
        <div className="flex-1 -mr-16">
          <Image
            src="/symbols-vivamulti.svg"
            alt="símbolos do Viva Multi"
            width={590}
            height={430}
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-blueCustom-blue04 absolute bottom-0 left-0 -mb-7" />
    </section>
  );
}
