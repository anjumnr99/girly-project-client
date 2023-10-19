import React from 'react';

const ProductDetails = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="card md:card-side overflow-y-auto py-10 px-5 rounded-none  md:px-2 lg:px-20  md:h-[100vh] ">
                <figure className='h-[60%] md:h-full w-full md:w-[50%]'><img className='h-full w-full' src="https://i.ibb.co/m6q4hyX/Golden-face-powder-makeup-product-cosmetic-generative-ai.jpg" alt="Album" /></figure>
                <div className="   md:h-full w-full md:w-[50%] md:ml-10 space-y-2 md:space-y-3 mb-4 ">
                    <h2 className=" text-2xl lg:text-4xl font-bold ">Rose Massage Oil</h2>
                    <div className='flex gap-2'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />

                        </div>
                        <p className='text-lg text-slate-600 font-normal'>4.9</p>
                    </div>

                    <p className='text-md  font-light text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit vel imperdiet turpis. Orci varius natoque penatibus et magnis dis parturient montes. Pellentesque pretium lacinia orci nec dictumOrci varius natoque penatibus et magnis dis parturient montes. </p>
    
                    <p className='text-2xl text-gray-600 '>$ 299</p>
                        <div className=" mb-4">
                            <button className=" bg-rose-600 text-base text-white py-3 px-8 font-semibold">ADD TO CART</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;