import Image from "next/image";

interface CardDownloadProps {
  iconSrc: string;
  platformName: string;
}

export function CardDownload({ iconSrc, platformName }: CardDownloadProps) {
  return (
    <div className="flex items-center bg-blueCustom-blue06 w-[180px] h-[60px] px-4 py-3 mt-8 rounded-lg">
      <Image
        src={iconSrc}
        width={23}
        height={28}
        alt={`ícone ${platformName}`}
        className="mr-4"
      />
      <div className="flex flex-col justify-center">
        <span className="text-xs text-white">Download via</span>
        <p className="text-white">{platformName}</p>
      </div>
    </div>
  );
}
