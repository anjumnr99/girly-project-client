import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReviewCards from './ReviewCards';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = ({mode}) => {

    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))    
            
            
            AOS.init({ duration: 2000 });
    }, []);

console.log(reviews);
    const responsive =  {
        0: {
            items: 1,
        },
        1024: {
            items: 2,
            itemsFit: 'contain',
        }
      }

    return (
        <div>
            <div className=''>


                <div className=' bg-gray-100 mt-20'>

                    <div className={`max-w-[1440px] ${mode} mx-auto  my-10  px-3 py-5 lg:px-8 lg:py-20`}>
                        <p  className="text-center font-semibold text-orange-500">OUR TESTIMONIALS</p>
                        <div data-aos="flip-right">
                            <h1  className={`text-3xl  lg:text-4xl font-semibold ${mode} text-slate-800 text-center mb-10`}>WHAT'S OUR CLIENT SAY?</h1>
                        </div>
                        
                        {/* <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                            <div className=' flex flex-col items-center'>
                                <div className="avatar">
                                    <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                        <img src="https://i.ibb.co/YQjMSbs/teaam4.jpg" />
                                    </div>

                                </div>
                                <div className='text-center my-5'>
                                    <p className='text-2xl text-rose-500 font-semibold'>Alice Bohn </p>
                                    <p className=' text-slate-600 font-bold'>Manager</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center'>
                                <div className="avatar">
                                    <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                        <img src="https://i.ibb.co/sgdVpB6/team-2.jpg" />
                                    </div>

                                </div>
                                <div className='text-center my-5'>
                                    <p className='text-2xl text-rose-500 font-semibold'>Turner Alia</p>
                                    <p className=' text-slate-600 font-bold'>Agency Founder</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center'>
                                <div className="avatar">
                                    <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                        <img src="https://i.ibb.co/cwFW2RD/team1.jpg" />
                                    </div>

                                </div>
                                <div className='text-center my-5'>
                                    <p className='text-2xl text-rose-500 font-semibold'>Amy Adams </p>
                                    <p className=' text-slate-600 font-bold'>Сoordinator</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center'>
                                <div className="avatar">
                                    <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                        <img src="https://i.ibb.co/StxmyHp/team3.jpg" />
                                    </div>

                                </div>
                                <div className='text-center my-5'>
                                    <p className='text-2xl text-rose-500 font-semibold'>Julia Jamson </p>
                                    <p className=' text-slate-600 font-bold'>Creative Director</p>
                                </div>
                            </div>

                        </div> */}

                        <AliceCarousel
                            items={reviews?.map(review=><ReviewCards mode={mode} key={review.id} review={review}></ReviewCards>)}
                            autoPlay={true}
                            autoPlayInterval="1000"
                            responsive={responsive}
                            infinite={true}
                            disableButtonsControls={true}
                            touchMoveDefaultEvents={false}
                            touchTracking={false}
                            autoHeight={true}
                            
                        >

                        </AliceCarousel>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;