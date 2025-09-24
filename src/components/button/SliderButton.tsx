import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'
interface SliderButtonProps {
    direction: "prev" | "next"
    onClick: () => void
}

export default function SliderButton({ direction, onClick} : SliderButtonProps) {

    const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

    return (
        <div
            onClick={onClick}
            className={`
                absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center
                rounded-full bg-white shadow cursor-pointer opacity-70 hover:opacity-100
                transition-all duration-300 border border-gray-300
                ${direction === "prev" ? "-left-5" : "-right-5"}
            `}
        >
            <Icon size={18} />
        </div>
    ) 
}
