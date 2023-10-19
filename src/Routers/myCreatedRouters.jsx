import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/AddProduct";
import Products from "../Componentes/Products";
import BrandProduct from "../Componentes/BrandProduct";
import ProductDetails from "../Componentes/ProductDetails";


const myCreatedRouters = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/brands')
            },
            {
                path:'/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
                
            },
            {
                path:'/myCart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/brands/:id',
                element:<BrandProduct></BrandProduct>,
                loader:({params})=>fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path:'/product/details/:id',
                element:<ProductDetails></ProductDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default myCreatedRouters;