import React from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex animate-scroll whitespace-nowrap gap-5">
        {images.concat(images).map((src, index) => (
          <div key={index} className="inline-block w-[350px] h-[150px]">
            <Image
              src={src}
              alt={`Logo ${index}`}
              layout="responsive"
              width={350}
              height={150}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
