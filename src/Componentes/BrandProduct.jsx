import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";


const BrandProduct = () => {
    const brand = useLoaderData();
    const [products, setProducts] = useState([]);
    const { name } = brand;

    useEffect(() => {
        fetch('https://girly-project-server-lhcn1d40u-anjus-projects-6a90d7b7.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    
                    const findProducts = data?.filter(item => (item.brand)?.toLocaleLowerCase() === name?.toLocaleLowerCase());
                    setProducts(findProducts);
                   
                }
                 
            })

    }, [name]);

    

   

    return (
        <div>
            {
                products?.length === 0 ?
                    <div className="h-[80vh] max-w-[1440px] mx-auto px-4 flex justify-center items-center">
                        <h1 className=" text-xl md:text-2xl lg:text-4xl font-semibold text-center">No available data</h1>
                    </div> : <Products products={products} ></Products>

            }


        </div>
    );
};

export default BrandProduct;