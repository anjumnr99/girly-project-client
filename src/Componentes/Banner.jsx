import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className=" max-w-[1440px] mx-auto  ">

            <div className="relative">
                <div className="absolute block">
                    <div className="flex h-[100vh]  ">
                        <img data-aos="fade-up"  data-aos-offset="300" data-aos-easing="ease-in-sine" className="h-full w-[60%]" src="https://i.ibb.co/ZTSXH76/seductive-colorful-lipstick-colors-lip-care-coloring-lipstick-sexiness-generative-ai-210687-2103.jpg" alt="" />

                        <img data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="300" className="h-full w-[40%]" src="https://i.ibb.co/x7V0Hrv/creative-cosmetics-composition-advertisement-commercial-photoshoot-950002-26839.jpg" alt="" />


                    </div>
                </div>

                <div data-aos="fade-left" data-aos-offset="300"
                    data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[40%]  bg-transparent p-6 absolute top-44 right-64 text-right">

                    <h1 className="mb-5 text-8xl text-white font-bold">Look beautiful enchanting</h1>
                    <p className="mb-5 italic text-white">Beautiful with a charming look and style of your own choice </p>
                </div>

            </div>
            <div className=" " >
                <div className="w-[50%]  ">

                </div>
                {/* <div className="">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div> */}
            </div>

            {/* <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/ZTSXH76/seductive-colorful-lipstick-colors-lip-care-coloring-lipstick-sexiness-generative-ai-210687-2103.jpg)' }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div> */}


        </div>
    );
};

export default Banner;