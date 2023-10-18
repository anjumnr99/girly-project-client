import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className=" max-w-[1440px] mx-auto mb-5 ">

            <div className="hero  max-h-[90vh] ">
                <div className="flex h-full">
                    <img data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="h-full w-full md:w-[60%]" src="https://i.ibb.co/ZTSXH76/seductive-colorful-lipstick-colors-lip-care-coloring-lipstick-sexiness-generative-ai-210687-2103.jpg" alt="" />

                    <img data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="300" className=" h-full hidden md:block w-[40%]" src="https://i.ibb.co/x7V0Hrv/creative-cosmetics-composition-advertisement-commercial-photoshoot-950002-26839.jpg" alt="" />


                </div>

                <div className=" max-w-xl text-left my-4">

                    <div data-aos="fade-left" 
                        data-aos-easing="ease-in-sine" className="  text-right  bg-transparent p-6 ">

                        <h1 className="mb-5 text-5xl  lg:text-8xl text-orange-600 font-bold">Look beautiful enchanting</h1>
                        <p className="mb-5 italic text-white">Beautiful with a charming look and style of your own choice </p>
                    </div>

                </div>

            </div>




            {/* <div className="relative ">
                <div className="absolute block">
                    <div className="flex h-[100vh]  ">
                        <img data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="h-full w-full md:w-[60%]" src="https://i.ibb.co/ZTSXH76/seductive-colorful-lipstick-colors-lip-care-coloring-lipstick-sexiness-generative-ai-210687-2103.jpg" alt="" />

                        <img data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="300" className="h-full hidden md:block w-[40%]" src="https://i.ibb.co/x7V0Hrv/creative-cosmetics-composition-advertisement-commercial-photoshoot-950002-26839.jpg" alt="" />


                    </div>
                </div>

                <div data-aos="fade-left"
                    data-aos-easing="ease-in-sine" className=" md:w-[40%]  bg-transparent p-6 absolute top-32 lg:top-44 right-0 md:right-44 lg:right-96 text-right">

                    <h1 className="mb-5 text-5xl  lg:text-7xl text-white font-bold">Look beautiful enchanting</h1>
                    <p className="mb-5 italic text-white">Beautiful with a charming look and style of your own choice </p>
                </div>

            </div> */}
        </div>
    );
};

export default Banner;