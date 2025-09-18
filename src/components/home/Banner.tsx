import ImageBanner from "./ImageBanner";
import TextInfo from "./TextInfo";
const Banner = () => {

    return (
        <section className="w-full h-[calc(100vh-96px)]">

            <ImageBanner />
            <TextInfo/>

        </section>
    );
};

export default Banner;
