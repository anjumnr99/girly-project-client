import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/AddProduct";
import BrandProduct from "../Componentes/BrandProduct";
import ProductDetails from "../Componentes/ProductDetails";
import UpdatedProduct from "../Pages/UpdatedProduct";


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
                </PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/cart')
                
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
                element:<PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<PrivateRoute>
                    <UpdatedProduct></UpdatedProduct>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)

            }
        ]
    }
])

export default myCreatedRouters;