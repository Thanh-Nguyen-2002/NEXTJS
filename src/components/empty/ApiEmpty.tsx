import { FileSearch } from 'lucide-react';
import React from 'react'

interface ApiEmptyProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    goBack?: boolean;
    onGoBack?: () => void;
}
export default function ApiEmpty({
    title,
    description,
    actionLabel,
    onAction,
    goBack = false,
    onGoBack
}: ApiEmptyProps ) {
    
    return (
        <div className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br 
            from-gray-50 to-white rounded-2xl shadow-md border border-gray-200 animate-fadeIn">
      
            <div className="flex items-center justify-center w-28 h-28 rounded-full bg-gray-100 mb-6">
                <FileSearch className="w-14 h-14 text-gray-500 animate-bounce" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {title}
            </h2>

            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                {goBack && onGoBack && (
                    <button
                        onClick={onGoBack}
                        className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-lg 
                        hover:shadow-xl hover:bg-gray-300 transition-transform transform hover:-translate-y-1 mb-4 cursor-pointer"
                    >
                        Quay lại
                    </button>
                )}
                {onAction && actionLabel && (
                    <button
                        onClick={onAction}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg 
                        hover:shadow-xl hover:bg-blue-700 transition-transform transform hover:-translate-y-1 mb-4  cursor-pointer"
                    >
                        {actionLabel}
                    </button>
                )}
            </div>
            
        </div>
    )
}
