import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { CardDownload } from "./card-download";

export function Footer() {
  return (
    <footer className="mt-40 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Coluna 1: Logo e Descrição */}
          <div className="w-64 h-36">
            <Image
              src="/logo2.svg"
              alt="logo da Viva Multi"
              width={100}
              height={100}
            />
            <p className="text-blueCustom-blueBlack mt-6 text-base">
              <span className="font-bold">VIVA MULTI</span> é um cartão
              assistencial, um jeito moderno, digital e acessível de verdade
              para fazer consultas, exames e outros procedimentos.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blueCustom-blue01">
              Institucional
            </h3>
            <ul className="text-blueCustom-blueBlack mt-6 text-base font-semibold">
              <li className="mb-8">
                <a href="#" className="hover:underline">
                  Sobre Nós
                </a>
              </li>
              <li className="mb-8">
                <a href="#" className="hover:underline">
                  Serviços
                </a>
              </li>
              <li className="mb-8">
                <a href="#" className="hover:underline">
                  Contato
                </a>
              </li>
              <li className="mb-8">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blueCustom-blue01">
              Atendimento
            </h3>
            <div className="flex items-center mb-6">
              <Image
                src="/icon-email.svg"
                alt="Email Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <p className="text-base text-blueCustom-blueBlack font-semibold">
                contato@vivamultisaude.com.br
              </p>
            </div>
            <div className="flex items-center mb-12">
              <Image
                src="/icon-phone.svg"
                alt="Phone Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <p className="text-base text-blueCustom-blueBlack font-semibold">
                SAC: (43) 3772-1333
              </p>
            </div>
            <div className="flex gap-5">
              <Image
                src="/icon-instagram.svg"
                alt="Instagram Icon"
                width={40}
                height={40}
              />
              <Image
                src="/icon-linkedin.svg"
                alt="LinkedIn Icon"
                width={40}
                height={40}
              />
              <Image
                src="/icon-facebook.svg"
                alt="Facebook Icon"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blueCustom-blue01">
              Baixe o nosso APP
            </h3>
            <div className="flex flex-col ">
              <CardDownload
                platformName="Apple Store"
                iconSrc="/icon-apple-purple.svg"
                variant="secondary"
              />
              <CardDownload
                platformName="Google Play"
                iconSrc="icon-googleplay-purple.svg"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
