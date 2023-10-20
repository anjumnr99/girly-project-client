import { useContext } from 'react';
import { useLoaderData} from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ProductDetails = () => {
    const product = useLoaderData();
    const {  user } = useContext(AuthContext);

    const { name,brand,image,price,rating,description,type} = product || {};

    const handleAddToCart = () =>{

        const userEmail = user.email;
        console.log(userEmail);

        const addProduct = {userEmail,name,image,price,rating,description,type,brand};
        console.log(addProduct);
          
        fetch('https://girly-project-server-dhlr0se60-anjus-projects-6a90d7b7.vercel.app/cart', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'This product added on cart successfully',
                    '',
                    'success'
                );
                console.log(data);
            })
    }

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="card md:card-side overflow-y-auto py-10 px-5 rounded-none  md:px-2 lg:px-20  md:h-[100vh] ">
                <figure className='h-[60%] md:h-full w-full md:w-[50%]'><img className='h-full w-full' src={image} alt="Album" /></figure>
                <div className="   md:h-full w-full md:w-[50%] md:ml-10 space-y-2 md:space-y-3 lg:space-y-6 mb-4 ">
                    <h2 className=" text-2xl lg:text-4xl font-bold ">{name}</h2>
                    <div className='flex gap-2'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-600" />

                        </div>
                        <p className='text-lg text-slate-600 font-normal'>{rating}</p>
                    </div>

                    <p className='text-md  font-light text-gray-500'>{description} </p>
                     
                     <p className='font-bold'>TYPE: <span className='text-gray-500 font-light'>{type}</span></p>
                    <p className='text-2xl text-gray-700 '> <span className='text-black'>Price :</span> $ {price}</p>
                        <div className=" mb-4">
                            <button onClick={handleAddToCart} className=" bg-rose-600 text-base text-white py-3 px-8 font-semibold">ADD TO CART</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;