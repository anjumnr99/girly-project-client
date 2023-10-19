import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardProduct = ({ product,cart,setCart }) => {
    const { _id, name, brand, image, type, price, rating } = product || {};

    const handleRemove = (id) => {
        console.log('delete the id : ', _id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Your Product has been removed.',
                                'success'
                            )
                            const remainingProducts = cart?.filter(product => product?._id !== _id);
                            setCart(remainingProducts)
                        }

                    })

            }
        })
    }
    return (
        <div>
            <div className="card glass">

                <div className="  ">
                    <figure className="relative  w-full h-96">
                        <img className="absolute block w-full h-full " src={image} alt="" />

                        <div className="absolute overlay rounded-b-lg bg-[#0B0B0B80] bottom-0 w-full h-24 "></div>
                        <div className="absolute block bottom-6 right-6 ">
                            <Link to={`/product/details/${_id}`}>
                                <button className=" btn border-none hover:bg-orange-500 bg-orange-400  text-white ">Details</button>
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

                    <button onClick={()=>handleRemove(_id)} className=" btn border-none hover:bg-rose-600 bg-rose-500 text-white w-full mt-2">Remove from the cart</button>

                </div>


            </div>
        </div>
    );
};

export default CardProduct;