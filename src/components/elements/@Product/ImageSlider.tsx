import { Image } from "@chakra-ui/react";
import { urlFor } from "../../../lib/client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface props {
    images: any
}

const ImageSlider = ({ images }: props) => {
    return (
        <Carousel infiniteLoop showThumbs={false} >
            {images.image.map((slide: any, i: number) => {
                return <Image key={i} src={urlFor(slide) as any} height="auto" width="800px" alt={'none'} />;
            })}
        </Carousel>
    );
};

export default ImageSlider;