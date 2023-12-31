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
import Error from "../Pages/Error";



const myCreatedRouters = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://girly-project-server-d7qyc15ff-anjus-projects-6a90d7b7.vercel.app/brands')
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
                loader:()=>fetch('https://girly-project-server-d7qyc15ff-anjus-projects-6a90d7b7.vercel.app/cart')
                
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
                errorElement: <Error></Error>,
                loader:({params})=>fetch(`https://girly-project-server-d7qyc15ff-anjus-projects-6a90d7b7.vercel.app/brands/${params.id}`)
            },
            {
                path:'/product/details/:id',
                element:<PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                errorElement: <Error></Error>,
                loader:({params})=>fetch(`https://girly-project-server-d7qyc15ff-anjus-projects-6a90d7b7.vercel.app/products/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<PrivateRoute>
                    <UpdatedProduct></UpdatedProduct>
                </PrivateRoute>,
                errorElement: <Error></Error>,
                loader:({params})=>fetch(`https://girly-project-server-d7qyc15ff-anjus-projects-6a90d7b7.vercel.app/products/${params.id}`)

            }
        ]
    }
])

export default myCreatedRouters;