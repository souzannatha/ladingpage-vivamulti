import Image from "next/image";

interface CardDownloadProps {
  iconSrc: string;
  platformName: string;
  variant?: "primary" | "secondary";
}

export function CardDownload({
  iconSrc,
  platformName,
  variant = "primary",
}: CardDownloadProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`flex items-center ${
        isPrimary
          ? "bg-blueCustom-blue06"
          : "bg-white border border-blueCustom-blue04"
      } w-[180px] h-[60px] px-4 py-3 mt-8 rounded-lg ${
        !isPrimary ? "text-blueCustom-blue06" : "text-white"
      }`}
    >
      <Image
        src={iconSrc}
        width={23}
        height={28}
        alt={`ícone ${platformName}`}
        className="mr-4"
      />
      <div className="flex flex-col justify-center">
        <span
          className={`text-xs font-medium ${
            isPrimary ? "text-white" : "text-blueCustom-blue06"
          }`}
        >
          Download via
        </span>
        <p
          className={`text-base font-semibold ${
            isPrimary ? "text-white" : "text-blueCustom-blue06"
          }`}
        >
          {platformName}
        </p>
      </div>
    </div>
  );
}
