import Brand from "./Brand";


const Brands = ({brands}) => {
    return (
        <div className="max-w-[1440px] mx-auto ">
            {
                    brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
        </div>
    );
};

export default Brands;