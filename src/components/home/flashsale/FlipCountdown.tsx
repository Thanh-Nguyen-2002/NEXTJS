"use client";

import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

export default function FlipCountdown({ endTime }: { endTime: string }) {
    return (
        <Countdown
            date={new Date(endTime)}
            renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) return null;
                return (
                    <div className="flex justify-center items-center gap-2">
                        <div className="bg-[black] text-[white] font-bold p-2 w-10 rounded-[5px]">
                            {String(days).padStart(2, "0")}
                        </div>
                        <span className="font-bold">:</span>
                        <div className="bg-[black] text-[white] font-bold p-2 w-10 rounded-[5px]">
                            {String(hours).padStart(2, "0")}
                        </div>
                        <span className="font-bold">:</span>
                        <div className="bg-[black] text-[white] font-bold p-2 w-10 rounded-[5px]">
                            {String(minutes).padStart(2, "0")}
                        </div>
                        <span className="font-bold">:</span>
                        <div className="bg-[black] text-[white] font-bold p-2 w-10 rounded-[5px]">
                            {String(seconds).padStart(2, "0")}
                        </div>
                    </div>
                );
            }}
        />
    );
}
