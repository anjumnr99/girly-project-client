import Product from "./Product";




const Products = ({products}) => {
   
    console.log(products);
 
    return (
        <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products?.map(product=><Product key={product._id} product={product}></Product>)
            }
            
        </div>
    );
};

export default Products;