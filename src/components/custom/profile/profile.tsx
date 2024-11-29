"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { WatchList } from "./components/watchlist";
import { Created } from "./components/created";
import { Followers } from "./components/followers";
import { Following } from "./components/following";

interface ProfileStats {
  userImage: string;
  userName: string;
  followers: string;
  likes: string;
  mentions: number;
  walletId: string;
}

interface TabList {
  value: string;
  label: string;
}

export function Profile() {
  const profileStats: ProfileStats = {
    userImage: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
    userName: "suic0llector1",
    followers: "104.89k",
    likes: "1.09m",
    mentions: 503,
    walletId:
      "EkpeynMmNKCM1jygH5u4PoPuW3naRtP4m3s5xv7f32joijo23fn2g4iuhojj28ufvnklsdv",
  };

  const tabList: TabList[] = [
    {
      value: "watchlist",
      label: "Watchlist",
    },
    {
      value: "created",
      label: "Created",
    },
    {
      value: "followers",
      label: "Followers",
    },
    {
      value: "following",
      label: "Following",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="w-[540px]">
        <div className="flex bg-white rounded-2xl p-6 mb-2 shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)]">
          <Avatar className="w-[107px] h-[107px] mr-4 shrink-0">
            <Image
              className="rounded-full"
              src={profileStats.userImage}
              alt="Profile picture"
              width={107}
              height={107}
            />
          </Avatar>
          <div className="min-w-0">
            {/* User name */}
            <div className="flex items-center">
              <h1 className="text-[20px] font-semibold text-[#0F1419]">
                {profileStats.userName}
              </h1>
              <Button
                variant="ghost"
                size="icon"
                className="h-auto p-0 hover:bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <g opacity="0.25">
                    <path
                      d="M9 4.50001L10.5286 2.97142C10.7889 2.71107 11.2111 2.71107 11.4714 2.97142L13.5286 5.02861C13.7889 5.28896 13.7889 5.71107 13.5286 5.97142L12 7.50001M9 4.50001L2.19526 11.3048C2.07024 11.4298 2 11.5993 2 11.7762V13.8333C2 14.2015 2.29848 14.5 2.66667 14.5H4.72386C4.90067 14.5 5.07024 14.4298 5.19526 14.3048L12 7.50001M9 4.50001L12 7.50001"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Button>
            </div>
            {/* Followers, Likes, Mentions */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#536471] text-sm">Followers</span>
                  <div className="text-[#0F1419] text-base font-semibold">
                    {profileStats.followers}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#536471] text-sm">Likes</span>
                  <div className="text-[#0F1419] text-base font-semibold">
                    {profileStats.likes}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#536471] text-sm">Mentions</span>
                <div className="text-[#0F1419] text-base font-semibold">
                  {profileStats.mentions}
                </div>
              </div>
            </div>
            {/* Wallet ID */}
            <div className="flex items-center mt-4 text-sm text-[#1D9BF0]">
              <button
                className="flex items-center w-full max-w-[380px] hover:opacity-70 transition-opacity"
                onClick={() => alert(profileStats.walletId)}
              >
                <p className="truncate">{profileStats.walletId}</p>
                <svg
                  className="ml-2 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12 10V4M12 4H5.99999M12 4L4.33333 11.6667"
                    stroke="#006AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="watchlist">
          <TabsList className="grid w-full h-full grid-cols-4 p-1 rounded-xl bg-transparent mb-2">
            {tabList.map((tab) => (
              <TabsTrigger
                key={tab.value}
                className="font-semibold rounded-lg px-4 py-2.5 text-base data-[state=active]:bg-[#006AFF0F] data-[state=active]:text-[#006AFF] data-[state=active]:shadow-none text-[#006AFF]"
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="watchlist">
            <WatchList />
          </TabsContent>

          <TabsContent value="created">
            <Created />
          </TabsContent>

          <TabsContent value="followers">
            <Followers />
          </TabsContent>

          <TabsContent value="following">
            <Following />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
