import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Brand = ({ brand }) => {
    const { _id, image, name } = brand || {};
    useEffect(()=>{
        AOS.init({duration:2000});

    },[]);
    return (
        <div>


            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" className=' flex flex-col items-center p-3'>
                <Link to={`/brands/${_id}`}>
                    <div className="avatar">
                        <div className=" w-60 rounded-full ring ring-rose-600 ring-offset-rose-300 ring-offset-4">
                            <img src={image} />
                        </div>

                    </div>
                    <div className='text-center mt-3'>
                        <p className='text-2xl text-gray-700 font-semibold'>{name}</p>

                    </div>
                </Link>
            </div>


        </div>
    );
};

export default Brand;