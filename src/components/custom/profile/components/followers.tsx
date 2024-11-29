import { FollowItem, FollowTable } from "./follow-table";


export function Followers() {
  const followers: FollowItem[] = [
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "suic0llector1",
      pnlProfits: "+17.51%",
      followers: "10.459k",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "2eqzWx",
      pnlProfits: "-1.02%",
      followers: "8.124k",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "ArrTos",
      pnlProfits: "-5.12%",
      followers: "1.245k",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "BtHJwe",
      pnlProfits: "+185.24%",
      followers: "899",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "BoostItDMH",
      pnlProfits: "+1043.45%",
      followers: "561",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "5JF1V8",
      pnlProfits: "+58.19%",
      followers: "431",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "Webump2DL6",
      pnlProfits: "+567.41%",
      followers: "411",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "bUmP027612",
      pnlProfits: "-159.80%",
      followers: "380",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "CTAPP_2M7E",
      pnlProfits: "+10.10%",
      followers: "125",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      account: "HycSBo",
      pnlProfits: "+80.92%",
      followers: "11",
    },
  ];

  return <FollowTable users={followers} type="followers" />;
}
