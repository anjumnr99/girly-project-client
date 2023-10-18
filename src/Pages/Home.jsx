import { useLoaderData } from "react-router-dom";
import Banner from "../Componentes/Banner";
import Brands from "../Componentes/Brands";




const Home = () => {
    const brands = useLoaderData();
    console.log(brands);
    return (
        <div className="">
            <Banner></Banner>
            <Brands brands={brands} ></Brands>

        </div>
    );
};

export default Home;