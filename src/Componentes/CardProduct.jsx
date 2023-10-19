import { Link } from "react-router-dom";


const CardProduct = ({product}) => {
    const {_id, name, brand, image, type, price, rating } = product || {};
    return (
        <div>
            <div className="card glass">
             
                <div className="  ">
                    <figure className="relative  w-full h-96">
                        <img className="absolute block w-full h-full " src={image} alt="" />

                        <div className="absolute overlay rounded-b-lg bg-[#0B0B0B80] bottom-0 w-full h-24 "></div>
                        <div className="absolute block bottom-6 right-6 ">
                            <Link to={`/product/details/${_id}`}>
                                <button className=" btn border-none bg-orange-400  text-white ">Details</button>
                            </Link>

                            
                        </div>

                    </figure>
                </div>
                <div className=" text-start w-full px-6 py-4 ">
                    <p className="text-2xl font-semibold">{brand}</p>
                    <p className="text-xl text-rose-500 font-semi-bold">{type}</p>
                    <h2 className=" text-2xl font-bold" >{name}</h2>
                    <p className=" text-lg font-semibold">$ {price}</p>
                    <div className="flex">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-lg font-bold ml-2">{rating}</p>
                    </div>

                    <button className=" btn border-none bg-rose-500 text-white w-full mt-2">Remove from the cart</button>

                </div>
                

            </div>
        </div>
    );
};

export default CardProduct;