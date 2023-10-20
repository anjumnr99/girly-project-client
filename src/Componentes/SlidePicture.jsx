

const SlidePicture = ({ picture }) => {
    const { image } = picture || {};
    console.log(picture);
    const handleDragStart = (e) => e.preventDefault();
    return (
        <div className="  w-full">
            {/* <div className="hero">
                <div className=" carousel carousel-item  w-full ">
                    <img onDragStart={handleDragStart} role="presentation" className="w-full h-full  " src={image} alt="" />
                </div>
                <div className=" max-w-xl text-left ">

                    <div className="  text-right  bg-transparent p-6 ">

                        <h1 className="mb-5 text-5xl text-orange-600 font-bold">Look beautiful enchanting</h1>
                        <p className="mb-5 italic text-white">Beautiful with a charming look and style of your own choice </p>
                    </div>

                </div>
            </div> */}

            <div className="hero min-h-[70vh]" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-gradient-to-r from-black bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl  lg:text-8xl text-rose-600 font-bold">50% OFF</h1>
                        <p className="mb-5 text-base lg:text-lg font-bold text-orange-500">Beauty Store Sale Minimum 55% Discount Or Up to 80% Off On A Big Range Of cosmetic.</p>
                        <button className="btn border-none rounded-none bg-rose-300 hover:bg-rose-400">Get Started</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default SlidePicture;