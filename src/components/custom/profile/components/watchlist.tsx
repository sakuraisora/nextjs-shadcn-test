import { WatchListCard } from "./watchlist-card";

export function WatchList() {
  const watchListItems = [
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      name: "SuiPaws",
      id: "324.4339 SUI",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      name: "SuiPaws",
      id: "324.4339 SUI",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      name: "SuiPaws",
      id: "324.4339 SUI",
    },
    {
      avatar: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      name: "SuiPaws",
      id: "324.4339 SUI",
    },
  ];

  return (
    <div className="space-y-2">
      {watchListItems.map((item, index) => (
        <WatchListCard
          key={index}
          avatar={item.avatar}
          name={item.name}
          id={item.id}
        />
      ))}
      <button className="w-full py-4 text-[#006AFF] rounded-xl bg-[#006AFF0F] transition-colors font-semibold">
        Share my watchlist
      </button>
    </div>
  );
}
