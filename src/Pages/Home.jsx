import { useLoaderData } from "react-router-dom";
import Banner from "../Componentes/Banner";
import Brands from "../Componentes/Brands";
import { FiSun } from 'react-icons/fi';
import { BsMoonFill } from 'react-icons/bs';
import { useState } from "react";
import "../Home.css"
import Review from "../Componentes/Review";
import Subscription from "../Componentes/Subscription";
import Contact from "../Componentes/Contact";
import Footer from "../Componentes/Footer";




const Home = () => {
    const brands = useLoaderData();

    const [mode, setMode] = useState('');

    const handleMode = (theme) => {
        setMode(theme);
        console.log(mode);
    }


    return (
        <div className={`${mode} `}>

            <div className="flex items-center justify-start max-w-[1440px] mx-auto pl-6 lg:pl-10 mt-4 lg:py-2">
                <label className="swap swap-rotate ">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* sun icon */}
                    <FiSun onClick={() => handleMode('dark-theme')} className="swap-on fill-current w-6 lg:w-10 h-10"></FiSun>

                    {/* moon icon */}
                    <BsMoonFill onClick={() => handleMode('light-theme')} className="swap-off  w-6 lg:w-10 h-10"></BsMoonFill>
                </label>
            </div>

            <Banner ></Banner>
            <Brands brands={brands} mode={mode} ></Brands>
            <Review  mode={mode} ></Review>
            <Subscription  mode={mode} ></Subscription>
             <Contact mode={mode} ></Contact>
             <Footer mode={mode} ></Footer>
        </div>
    );
};

export default Home;