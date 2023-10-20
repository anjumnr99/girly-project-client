import { useEffect, useState } from "react";
import SlidePicture from "./SlidePicture";
import SimpleImageSlider from "react-simple-image-slider";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




const Slider = () => {

    const [slidePictures, setSlidePictures] = useState([]);



    useEffect(() => {

        fetch('/pictures.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSlidePictures(data)
            })

    }, [])

    console.log(slidePictures);


    // const images = [
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    //     { url: "https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" },
    // ];




    return (
        <div>
            <div className="  ">
                {/* <SimpleImageSlider
                    width={1200}
                    height={600}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    
                /> */}
            </div>

            <div className=" max-w-[1440px]  mx-auto   my-10 ">
                <AliceCarousel
                    items={slidePictures?.map(picture => <SlidePicture key={picture.id}
                        picture={picture}></SlidePicture>)}
                    autoPlay={true}
                    autoPlayInterval="1000"
                    // responsive={responsive}
                    infinite={true}
                    disableButtonsControls={true}
                    touchMoveDefaultEvents={false}
                   touchTracking={false}
                   autoHeight={true}

                >

                </AliceCarousel>



            </div>
        </div>
    );
};

export default Slider;