import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface WatchListCardProps {
  avatar: string;
  name: string;
  id: string;
}

export function WatchListCard({ avatar, name, id }: WatchListCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="rounded-xl w-[41px] h-[41px]">
            <Image src={avatar} alt={name} width={41} height={41} />
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-base text-sm font-semibold">{name}</span>
            <span className="text-[#006AFF] text-sm font-semibold">{id}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-5 w-8">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8412 2.5V4.83333C12.8412 5.01743 12.692 5.16667 12.5079 5.16667H10.1746M3.16667 13.5V11.1667C3.16667 10.9826 3.31591 10.8333 3.5 10.8333H5.83333M2.54255 8.6875C2.51447 8.46228 2.5 8.23283 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C9.78439 2.5 11.4074 3.34975 12.4214 4.66667M13.4574 7.3125C13.4855 7.53772 13.5 7.76717 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C6.21561 13.5 4.59258 12.6502 3.57856 11.3333"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="h-5 w-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 7.99993L5.33333 8.00008M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
          <button className="text-base text-[#536471] hover:text-[#006AFF] transition-colors underline">
            View coin
          </button>
        </div>
      </div>
    </div>
  );
}
