import { FollowItem, FollowTable } from "./follow-table";

export function Following() {
  const following: FollowItem[] = [
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
  ];

  return <FollowTable users={following} type="following" />;
}
