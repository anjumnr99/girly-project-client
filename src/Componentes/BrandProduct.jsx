import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";


const BrandProduct = () => {
    const brand = useLoaderData();
    const [products, setProducts] = useState([]);
    const { name } = brand;

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data) {
                    const findProducts = data?.filter(item => (item.brand).toUpperCase() === name.toUpperCase());
                    setProducts(findProducts)
                }

            })

    }, [name]);

    console.log(products);
    return (
        <div>
            <Products products={products} ></Products>
        </div>
    );
};

export default BrandProduct;