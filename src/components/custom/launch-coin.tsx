"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LaunchCoin() {
  const [showFirstDialog, setShowFirstDialog] = useState(false);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <div>
      <Dialog open={showFirstDialog} onOpenChange={setShowFirstDialog}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            variant="default"
            onClick={() => setShowFirstDialog(true)}
          >
            Launch coin (Level 1)
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[768px] max-w-[90vw] p-0 gap-0 rounded-2xl overflow-hidden">
          <div className="flex flex-col">
            <DialogHeader className="px-6 py-3 shrink-0">
              <DialogTitle className="font-['Inter'] text-[#081531] text-2xl font-semibold leading-[95%] tracking-[-0.24px]">
                Launch coin
              </DialogTitle>
              <DialogDescription>
                The first dialog to be launched
              </DialogDescription>
            </DialogHeader>

            <div className="flex-1">
              <div className="px-6 py-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                      Name
                    </Label>
                    <Input className="h-14 border-0 text-base rounded-2xl bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)]" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                      Ticker
                    </Label>
                    <Input className="h-14 border-0 text-base rounded-2xl bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)]" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                <div className="space-y-2">
                  <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                    Description
                  </Label>
                  <textarea className="w-full min-h-[120px] rounded-2xl bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)] border-0 px-4 py-3 text-base resize-none" />
                </div>
              </div>

              <div className="px-6 py-3">
                <div className="space-y-2">
                  <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                    Image
                  </Label>
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full cursor-pointer hover:opacity-90"
                    style={{
                      background:
                        "radial-gradient(116.81% 100% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, #006AFF 100%)",
                    }}
                  >
                    <span className="text-3xl text-white">+</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 mx-6">
                <div className="py-3">
                  <Button
                    variant="link"
                    className="flex justify-between items-center w-full p-0 text-[#006AFF] hover:text-[#006AFF]/90 hover:no-underline font-normal text-base"
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                  >
                    <div>Show more options</div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform transition-transform ${
                        showMoreOptions ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#006AFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>

                  {showMoreOptions && (
                    <div className="flex gap-4 mt-4">
                      <div className="space-y-2 flex-1">
                        <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                          X link
                        </Label>
                        <Input className="h-14 border-0 text-base rounded-2xl bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)]" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                          Discord
                        </Label>
                        <Input className="h-14 border-0 text-base rounded-2xl bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)]" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <Label className="font-['Booton_TRIAL'] text-black text-sm font-[380] leading-[110%] tracking-[-0.14px]">
                          Telegram link
                        </Label>
                        <Input className="h-14 border-0 text-base rounded-2xl bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)]" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="py-3">
                  <Button
                    size="lg"
                    className="w-full bg-[#006AFF] hover:bg-[#006AFF]/90 text-base font-normal rounded-2xl h-14"
                    onClick={() => {
                      setShowFirstDialog(false);
                      setShowPurchaseDialog(true);
                    }}
                  >
                    <span className="font-['Inter'] text-white text-base font-semibold leading-[95%] tracking-[-0.16px]">
                      Launch!
                    </span>
                  </Button>

                  <p className="text-sm text-gray-500 text-left mt-3">
                    When your coin completes its bonding curve you receive 0.5
                    SUI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPurchaseDialog} onOpenChange={setShowPurchaseDialog}>
        <DialogContent className="w-[400px] p-0 gap-0 rounded-2xl">
          <DialogHeader className="px-6 py-3 shrink-0">
            <DialogTitle className="font-['Inter'] text-[#081531] text-2xl font-semibold leading-[95%] tracking-[-0.24px]">
              How many you want to buy?
            </DialogTitle>
            <DialogDescription>
              The second dialog to be launched
            </DialogDescription>
          </DialogHeader>

          <div className="px-6 pb-6">
            <p className="text-gray-500 mt-2">
              It&apos;s optional but buying a small amount of coins helps
              protect your coin from snipers
            </p>

            <div className="flex justify-end items-center gap-2 mt-2 text-sm text-gray-500">
              Switch to TEST
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 5.00002L4.19526 2.80476C4.45561 2.54441 4.87772 2.54441 5.13807 2.80476L7.33333 5.00002M8.66667 11L10.8619 13.1953C11.1223 13.4556 11.5444 13.4556 11.8047 13.1953L14 11M4.66667 3.33335V13.3334M11.3333 2.66669V12.6667"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="0.00"
                  className="h-14 border-0 text-base rounded-[100px] bg-black/[0.04] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.02)] pr-24 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-black">SUI</span>
                  <div className="flex w-6 h-6 p-[4px_6px] items-center gap-2.5 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.604 7.16997C10.228 7.98781 10.604 9.0268 10.604 10.1534C10.604 11.28 10.22 12.3482 9.576 13.1744L9.52 13.2453L9.504 13.1535C9.492 13.0784 9.476 12.9992 9.46 12.9199C9.14 11.4469 8.092 10.1826 6.364 9.15615C5.2 8.46766 4.532 7.63731 4.356 6.69429C4.244 6.08508 4.328 5.4717 4.488 4.94595C4.652 4.4202 4.892 3.98207 5.096 3.71919L5.768 2.8638C5.884 2.71359 6.108 2.71359 6.224 2.8638L9.604 7.16997ZM10.664 6.31458L6.168 0.581367C6.084 0.472878 5.92 0.472878 5.836 0.581367L1.336 6.31458L1.32 6.33544C0.496 7.40781 0 8.76809 0 10.2494C0 13.7002 2.688 16.5 6 16.5C9.312 16.5 12 13.7002 12 10.2494C12 8.76809 11.504 7.40781 10.676 6.33544L10.664 6.31458ZM2.412 7.15328L2.812 6.64004L2.824 6.73601C2.832 6.81112 2.844 6.88623 2.86 6.96134C3.12 8.38421 4.052 9.57341 5.604 10.4914C6.956 11.2925 7.74 12.2147 7.968 13.2286C8.064 13.6501 8.08 14.0673 8.04 14.4304L8.036 14.4512L8.016 14.4596C7.408 14.7684 6.72 14.9436 5.996 14.9436C3.456 14.9436 1.396 12.7989 1.396 10.1534C1.396 9.01845 1.776 7.97112 2.412 7.15328Z"
                        fill="#4DA2FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-gray-500">
              You receive: 9744325.5411 TEST
            </div>

            <Button
              className="w-full bg-[#006AFF] hover:bg-[#006AFF]/90 text-base font-semibold rounded-2xl h-14 mt-4"
              onClick={() => setShowPurchaseDialog(false)}
            >
              Launch it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
