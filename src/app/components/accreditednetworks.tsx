import React from "react";
import Carousel from "./carousel";
import { Plans } from "./plans";

const images = [
  "/icon-alphasonic.svg",
  "/icon-ultramed.svg",
  "/icon-labimagem.svg",
  "/icon-hospital.svg",
];

export function AccreditedNetworks() {
  return (
    <div className="w-full h-[500px] bg-blueCustom-blue06 flex items-start mt-[100px]">
      <div className="ml-36 mt-[100px]">
        <span className="font-medium text-xl text-white">Parceiros</span>
        <h2 className="font-bold text-[52px] text-white mb-6">
          Redes Credenciadas
        </h2>
        <Carousel images={images} />
      </div>
    </div>
  );
}
