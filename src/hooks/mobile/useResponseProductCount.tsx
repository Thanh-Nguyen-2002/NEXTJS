"use client"
import { useEffect, useState } from 'react'

export default function useResponseProductCount() {
    const [visibleCount, setVisibleCount] = useState(5)

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if(width < 640) setVisibleCount(1);
            else if(width < 768) setVisibleCount(2);
            else if(width < 1024) setVisibleCount(3)
            else if(width < 1028) setVisibleCount(4)
            else setVisibleCount(5)
        }
        updateVisibleCount()
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount)
    }, [])

    return visibleCount
}
