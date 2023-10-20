import { useEffect } from "react";
import { MdPhonelinkRing ,MdLocationPin} from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSquareTwitter, FaGooglePlusG, FaFlickr, FaSquareYoutube, FaInstagram } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ mode }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []);

    return (
        <div>
            <div className=' max-w-[1440px] mx-auto px-3 lg:px-20 lg:my-20 ;lg:pt-10'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div data-aos="zoom-in" className="card shadow-xl  ">
                        <div className={`card-body text-start ${mode} lg:space-y-2 justify-start `}>
                            <h1 className="text-2xl font-semibold lg:mb-3 ">Contact Us</h1>
                            <div className="flex gap-2">
                                <MdLocationPin className='text-5xl lg:text-4xl text-rose-500'></MdLocationPin>
                                <h2 className="text-xl">Address: 8901 Marmora Road, Glasgow D04 89 GR, New York</h2>
                            </div>
                            <div className="flex gap-2">
                                <MdPhonelinkRing className='text-5xl lg:text-4xl text-rose-500'></MdPhonelinkRing>
                                <h2 className="text-xl">
                                    Phone 1: 0123456789 - Phone 2: 0123456789</h2>
                            </div>
                            <div className="flex gap-2">
                                <GoMail className='text-4xl text-rose-500'></GoMail>
                                <h2 className="text-xl">
                                    Mail to: sales@yoursite.com</h2>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="card shadow-xl  ">
                        <div className={`card-body text-start ${mode}  space-y-2 justify-start `}>
                            <h1 className="text-2xl font-semibold mb-3 ">Social Media</h1>
                            <p className="  text-gray-600 text-xl font-semibold">You can also contact with us on our <br /> social media platform </p>
                            
                            <div className="flex gap-3 justify-start items-center">
                                <AiFillFacebook className='text-4xl  text-rose-600'></AiFillFacebook>
                                <FaSquareTwitter className='text-4xl text-rose-600 '></FaSquareTwitter>
                                <FaGooglePlusG className='text-4xl text-rose-600'> </FaGooglePlusG>
                                <FaFlickr className='text-4xl text-rose-600'></FaFlickr>
                                <FaSquareYoutube className='text-4xl text-rose-600'></FaSquareYoutube>
                                <FaInstagram className='text-4xl text-rose-600'></FaInstagram>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Contact;