import { AlertTriangle, RefreshCw } from 'lucide-react'
import React from 'react'
interface ErrorProps {
    message?: string;
    onRetry?: () => void;
}

export default function ApiError({ message, onRetry } : ErrorProps) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-2xl shadow-md">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 mb-6 animate-pulse">
                <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
                Oops! Có lỗi xảy ra
            </h2>

            <p className="text-gray-600 mb-4 text-center">
                {message || "Không thể tải dữ liệu. Vui lòng kiểm tra kết nối hoặc thử lại sau."}
            </p>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-medium 
                    rounded-lg hover:bg-red-600 transition cursor-pointer"
                >
                    <RefreshCw className="w-4 h-4" />
                    Thử lại
                </button>
            )}
        </div>
    )
}
