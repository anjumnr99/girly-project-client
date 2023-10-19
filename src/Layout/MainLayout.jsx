import { Outlet } from "react-router-dom";
import Navbar from "../Componentes/Navbar";



const MainLayout = () => {
   
    
    return (
        <div className="bg-rose-50">
            <Navbar></Navbar>
            <Outlet ></Outlet>
        </div>
    );
};

export default MainLayout;