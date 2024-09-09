import React from "react";
import Carousel from "./carousel";

const images = [
  "/icon-alphasonic.svg",
  "/icon-ultramed.svg",
  "/icon-labimagem.svg",
  "/icon-hospital.svg",
];

export function AccreditedNetworks() {
  return (
    <div className="w-full h-[500px] bg-blueCustom-blue06 flex items-start mt-[100px] mobile:mt-[540px]">
      <div className="ml-36 mt-[100px] mobile:ml-7">
        <span className="font-medium text-xl text-white mobile:text-md">
          Parceiros
        </span>
        <h2 className="font-bold text-[52px] text-white mb-6 mobile:text-4xl">
          Redes Credenciadas
        </h2>
        <Carousel images={images} />
      </div>
    </div>
  );
}
