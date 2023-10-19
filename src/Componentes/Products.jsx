import Product from "./Product";




const Products = ({ products }) => {

    console.log(products);

    return (
        <div className=" max-w-[1440px] mx-auto p-10 mt-6">
                
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>


        </div>
    );
};

export default Products;