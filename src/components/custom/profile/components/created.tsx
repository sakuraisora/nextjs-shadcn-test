import { CreatedCard } from "./created-card";

export function Created() {
  const createdItems = [
    {
      image: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      coinName: "Sui Paws",
      description:
        "Playful meme coin on the Sui ecosystem, combining fun with community-driven growth.",
      marketCap: "643.09k",
      user: "suic0llector1",
      time: "1h 23m",
    },
    {
      image: "https://sakuraisora.github.io/nextjs-homework/images/kermit.jpg",
      coinName: "Sui Paws",
      description:
        "Playful meme coin on the Sui ecosystem, combining fun with community-driven growth.",
      marketCap: "643.09k",
      user: "suic0llector1",
      time: "1h 23m",
    },
  ];

  return (
    <div className="space-y-3">
      {createdItems.map((item, index) => (
        <CreatedCard
          key={index}
          image={item.image}
          coinName={item.coinName}
          description={item.description}
          marketCap={item.marketCap}
          user={item.user}
          time={item.time}
        />
      ))}
    </div>
  );
}
