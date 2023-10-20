

const ReviewCards = ({ review, mode }) => {
    const { client_pic, client_name, client_review } = review || {};
    return (
        <div>
            <div className="card mr-5 px-5 bg-transparent space-y-3">
                <div className="card-body">
                    <div className="avatar w-16">
                        <div className=" rounded-full">
                            <img src={client_pic} />
                        </div>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className=" text-base font-semibold text-gray-400">{client_review}</p>
                    
                    <div className="flex justify-start items-center gap-2"> 
                    <hr className={` ${mode} border-black w-16`} />
                       <p className="text-xl font-normal italic"> {client_name}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewCards;