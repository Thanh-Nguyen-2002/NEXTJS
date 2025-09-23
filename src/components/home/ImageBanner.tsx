import Image from "next/image"
const ImageBanner = () => {
    return (
        <div
            className="relative w-full h-[400px] md:h-[500px]"
        >
            <Image
                src="/images/about_us.jpg"
                alt="Vietnam Banner"
                fill
                className="object-cover"
                priority
            />
        </div>
    )
}
export default ImageBanner
