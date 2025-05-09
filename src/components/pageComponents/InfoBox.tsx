import { ReactNode } from "react";

type InfoBoxProps = {
  icon: ReactNode; // Instead of string for src
  title: string;
  description: string;
};

export const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-white border border-[#E6E6E6] py-2.5 px-4 rounded-xl shadow-lg max-w-sm w-full">
      <div className="w-8 h-8">{icon}</div>
      <div className="mt-2">
        <h4 className="font-secondary font-bold text-base text-[#191A15]">
          {title}
        </h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};
