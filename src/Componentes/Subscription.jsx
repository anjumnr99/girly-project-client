

const Subscription = ( {mode} ) => {
    return (
        <div className="max-w-[1440px] mx-auto px-4">
            <h1 className=" text-xs font-semibold text-center text-orange-600">SUBSCRIBE FOR NEWS</h1>
            <p className=" text-xl md:text-3xl lg:text-3xl font-normal max-w-xl text-center mx-auto my-4">Subscribe to our newsletter and get 10% off on your first order.</p>

            <div className=" max-w-xl flex text-center gap-1 mx-auto my-10 py-6">
                <input type="email"  placeholder="type your email address" className={`input ${mode} border-black  rounded-none bg-transparent input-bordered w-full border` } />
                <button className={`btn ${mode}  border-black bg-transparent rounded-none`}>Subscribe</button>
            </div>
            

        </div>
    );
};

export default Subscription;