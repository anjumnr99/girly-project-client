import Brand from "./Brand";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Brands = ({ brands }) => {
    useEffect(()=>{
        AOS.init({duration:1000});

    },[]);
    return (
        <div className="max-w-[1440px] mx-auto lg:mt-20  px-3 py-2 lg:px-10 lg:py-10  ">
            <h1 data-aos="fade-down" className='text-4xl lg:text-6xl font-bold text-slate-700 text-center mb-4'> Top Brands </h1>
            <p  className=" text-sm font-semibold text-center italic text-rose-400 mb-10">Choose your favorite brand and explore the products </p>



            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }


            </div>
        </div>
    );
};

export default Brands;



