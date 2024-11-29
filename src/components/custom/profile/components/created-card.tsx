import Image from "next/image";

interface CreatedCardProps {
  image: string;
  coinName: string;
  description: string;
  marketCap: string;
  user: string;
  time: string;
}

export function CreatedCard({
  image,
  coinName,
  description,
  marketCap,
  user,
  time,
}: CreatedCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)]">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl w-[64px] h-[64px] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={coinName}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-base font-semibold text-black leading-4">
            {coinName}
          </div>
          <div className="text-sm text-[#475467] leading-4 mt-1 mb-4">
            {description}
          </div>
          <div className="text-sm text-[#475467] leading-4 mb-1">
            Market cap
            <span className="font-semibold text-[#006AFF]">
              {" " + marketCap}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-black leading-4">
              By
              <span className="font-semibold">{" " + user}</span>
            </div>
            <div className="text-sm text-[#475467] leading-4 ml-12">
              {time} ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
