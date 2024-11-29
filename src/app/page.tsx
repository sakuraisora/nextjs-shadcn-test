"use client";

import { Button } from "@/components/ui/button";
import { LaunchCoin } from "@/components/custom/launch-coin";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Level 1 */}
        <LaunchCoin />

        {/* Level 2 */}
        <Button
          size="lg"
          variant="secondary"
          onClick={() => router.push("/profile")}
        >
          Profile (Level 2)
        </Button>
      </div>
    </div>
  );
}
