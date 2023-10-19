import { useLoaderData } from "react-router-dom";
import CardProduct from "../Componentes/CardProduct";


const MyCart = () => {
    const cartProducts = useLoaderData();
    return (
        <div className=" max-w-[1440px] mx-auto p-10 mt-6">
            <h1 className="text-4xl font-semibold text-center pb-10 ">Total Cart Product : {cartProducts.length}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    cartProducts?.map(product => <CardProduct key={product._id} product={product}></CardProduct>)
                }
            </div>

        </div>
    );
};

export default MyCart;