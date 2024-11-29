import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface FollowItem {
  avatar: string;
  account: string;
  pnlProfits: string;
  followers: string;
}

interface FollowTableProps {
  users: FollowItem[];
  type: "followers" | "following";
}

const tableHead = [
  {
    label: "",
    width: "w-[2%]",
  },
  {
    label: "Account",
    width: "w-[48%]",
  },
  {
    label: "PnL Profits",
    width: "w-[25%]",
  },
  {
    label: "Followers",
    width: "w-[25%]",
  },
];

export function FollowTable({ users, type }: FollowTableProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] overflow-hidden">
      <Table role="grid" aria-label={`${type} table`}>
        <TableHeader>
          <TableRow key="header-row" className="bg-transparent border-0">
            {tableHead.map((item, index) => (
              <TableHead
                key={`header-${item.label || index}`}
                scope="col"
                className={`
                    text-sm font-normal text-[#475467]
                    ${item.width} 
                    ${item.label === "Followers" ? "text-right" : ""}
                  `}
              >
                {item.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={`${type}-row-${user.account}-${index}`}
              className="border-0"
            >
              <TableCell>
                <button
                  aria-label={`${
                    type === "followers" ? "Follow" : "Unfollow"
                  } ${user.account}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    aria-hidden="true"
                    role="img"
                  >
                    <g opacity="0.2">
                      <path
                        d="M9.33333 9.33327C8.91519 9.22455 8.46935 9.16667 8 9.16667C5.20653 9.16667 3.24596 11.217 3 13.8333H7.33333M10 12.5H12H14M10.3333 4.83333C10.3333 6.122 9.28866 7.16667 8 7.16667C6.71134 7.16667 5.66667 6.122 5.66667 4.83333C5.66667 3.54467 6.71134 2.5 8 2.5C9.28866 2.5 10.3333 3.54467 10.3333 4.83333Z"
                        stroke="black"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </TableCell>
              <TableCell className="flex items-center gap-1">
                <Avatar className="w-[16px] h-[16px]">
                  <Image
                    src={user.avatar}
                    alt={user.account}
                    width={16}
                    height={16}
                  />
                </Avatar>
                <span className="text-sm font-normal text-black">
                  {user.account}
                </span>
              </TableCell>
              <TableCell className="text-sm font-normal text-[#475467]">
                {user.pnlProfits}
              </TableCell>
              <TableCell className="text-sm font-normal text-[#475467] text-right">
                {user.followers}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
