import { useLoaderData } from "react-router-dom";
import CardProduct from "../Componentes/CardProduct";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyCart = () => {
    const cartProducts = useLoaderData();
    const [cart,setCart] = useState([]);
    const {user} = useContext(AuthContext)

    const {email} = user || {};

    console.log(email);
    console.log(cart);

    useEffect(()=>{
        const findUser = cartProducts?.filter(user=>user.userEmail === email);
        setCart(findUser)
        
    },[email,cartProducts])

    console.log(cart);

    return (
        <div className=" max-w-[1440px] mx-auto p-10 mt-6">
            <h1 className="text-4xl font-semibold text-center pb-10 ">Total Cart Product : {cart.length}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    cart?.map(product => <CardProduct 
                        key={product._id} 
                        product={product}
                        cart={cart} 
                        setCart={setCart} 
                        ></CardProduct>)
                }
            </div>

        </div>
    );
};

export default MyCart;