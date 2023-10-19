import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedProduct = () => {

    const product = useLoaderData();
    const { _id } = product || {};
    
    const navigate = useNavigate();

    const handleUpdateProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const image = e.target.image.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;

        const updatedProduct = { name, brand, type, image, price, rating, description };

        console.log(updatedProduct);

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'The Product Updated Successfully!',
                    '',
                    'success'
                );
                console.log(data);
            })
    };

    const handleGoBack = () =>{
        navigate(-1);
    }



    return (
        <div>
            <div className="max-w-[1440px] border-t-2 mx-auto py-10" >

                <div className=" max-w-4xl  mx-auto min-h-[60vh] px-3 mb-5 flex flex-col  justify-center items-center ">

                    <h1 className=" text-4xl text-gray-500  font-bold mb-4">Add new product</h1>
                    <p className="text-sm font-semibold text-orange-600 mb-5">Use the below form to add a new product</p>
                    <div className="card bg-rose-300 flex-shrink-0 w-full  shadow-2xl ">
                        <form onSubmit={handleUpdateProduct} className="card-body">
                            <div className="md:flex md:gap-3">
                                <div className="form-control w-full md:w-[50%]">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-bold">Name</span>
                                    </label>
                                    <input type="text" defaultValue={product?.name} placeholder="Enter your name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full md:w-[50%]">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-bold">Brand name</span>
                                    </label>
                                    <input type="text" defaultValue={product?.brand} placeholder="Brand Name" name="brand" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex md:gap-3">
                                <div className="form-control w-full md:w-[50%]">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-bold">Type</span>
                                    </label>
                                    <input type="text" defaultValue={product?.type} placeholder="Product Type" name="type" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full md:w-[50%]">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-bold">Img URL</span>
                                    </label>
                                    <input type="text" defaultValue={product?.image} placeholder="Image URL" name="image" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex md:gap-3">
                                <div className="form-control w-full md:w-[50%]">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-bold">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" defaultValue={product?.price} className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full md:w-[50%]">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-bold">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" defaultValue={product?.rating} name="rating" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base text-slate-600 font-bold">Description</span>
                                </label>
                                <input type="text" defaultValue={product?.description} placeholder="Give a short description about product" name="description" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-base bg-rose-500 font-bold text-white hover:bg-rose-600">Update</button>
                            </div>

                        </form>


                    </div>

                    {/* <Link to={`/brands/${_id}`} >
                            <button className=" underline font-semibold mt-4 text-2xl rounded-none text-slate-700">Go back</button>
                        </Link> */}

                    <button onClick={handleGoBack} className=" underline font-semibold mt-4 text-2xl rounded-none text-slate-700">Go back</button>

                </div>

            </div>
        </div>
    );
};

export default UpdatedProduct;