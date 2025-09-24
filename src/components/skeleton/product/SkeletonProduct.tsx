"use client"
import useResponseProductCount from "@/hooks/mobile/useResponseProductCount";
import {
    Card,
    Skeleton
} from "antd"
const SkeletonProduct = () => {
    const visibleCount = useResponseProductCount()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {[...Array(visibleCount)].map((_,index) => (
                <Card key={index}
                    className="flex flex-col p-3 bg-white rounded-[8px] flex-shrink-0 h-85"
                    style={{ borderRadius: 8, margin: 8 }}
                >
                    <Skeleton.Image
                        active
                        className="h-40! w-full!"
                    />

                    <div className="mt-3 space-y-2 flex flex-col flex-1">
                        <Skeleton.Input 
                            className="w-full!"
                            active
                        />
                        <Skeleton.Input 
                            className="w-full!"
                            active
                        />
                        <div className="flex gap-5">
                            <Skeleton.Button 
                                className="w-full!"
                                active
                            />
                            <Skeleton.Avatar 
                                active
                            />
                        </div>                                                                                                                                                                                                                                                                                     
                    </div>
                </Card>
            ))}
        </div>
    );
};
export default SkeletonProduct;
