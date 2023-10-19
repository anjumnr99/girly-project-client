import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartProducts = useLoaderData();
    return (
        <div>
            MyCart :{cartProducts.length}

        </div>
    );
};

export default MyCart;