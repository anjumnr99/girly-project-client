import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosPerson } from 'react-icons/io';
import { useContext } from 'react';
import toast from "react-hot-toast";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const navLinks = <>
        <li className="text-md lg:text-xl font-semibold text-slate-600">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "   text-rose-500 font-bold" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="text-md lg:text-xl font-semibold text-slate-600">
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "   text-rose-500 font-bold" : ""
                }
            >
                Add Products
            </NavLink>
        </li>
        <li className="text-md lg:text-xl font-semibold text-slate-600">
            <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "   text-rose-500 font-bold" : ""
                }
            >
                My Cart
            </NavLink>
        </li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Logout Successfully!',
                    '',
                    'success'
                  )
                
                navigate('/login')
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry!',
                    text: err.message,
                  
                  })
                console.log(err)
            })
    }

    return (
        <div className=' bg-transparent ' >
            <div className='max-w-[1440px] mx-auto border  px-2 md:px-10  '>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className=" hidden lg:flex">
                            <ul className=" flex gap-10 px-1">
                                {navLinks}
                            </ul>
                        </div>

                        <Link to='/' className="btn btn-ghost normal-case text-xl lg:hidden">
                            <div>
                                <img className=" w-20 " src="https://see.fontimg.com/api/renderfont4/PK12m/eyJyIjoiZnMiLCJoIjo4MywidyI6MTAwMCwiZnMiOjgzLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZBRjZGMSIsInQiOjF9/R2lybHk/geraldine-personal-use-italic.png" alt="" />

                                <label className=' label ml-5 -mt-4 '>
                                    <span className="label-text-alt text-gray-400 italic">Pretty does as pretty pleases.</span>
                                </label>
                            </div>

                        </Link>

                    </div>

                    <div className=' navbar-center '>
                        <div className=" hidden  lg:flex justify-center items-center ">
                            <div>
                                <img src="https://see.fontimg.com/api/renderfont4/PK12m/eyJyIjoiZnMiLCJoIjo4MywidyI6MTAwMCwiZnMiOjgzLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZBRjZGMSIsInQiOjF9/R2lybHk/geraldine-personal-use-italic.png" alt="" />

                                <label className=' label ml-8 -mt-4 '>
                                    <span className="label-text-alt text-gray-400 font-semibold italic ">Pretty does as pretty pleases.</span>
                                </label>
                            </div>

                        </div>
                    </div>

                    {/* <div className="navbar-end flex justify-end items-center gap-3">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className=" lg:hidden text-2xl h-5 w-5">
                                <GiHamburgerMenu></GiHamburgerMenu>

                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box min-w-max">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex justify-center items-center gap-3">

                            <label tabIndex={0} className="avatar">
                                <div className="">
                                    <IoIosPerson className="text-4xl text-rose-600  "></IoIosPerson>
                                </div>
                            </label>

                            <button className="text-lg lg:text-xl font-semibold text-slate-600">
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "  text-rose-500 font-bold" : ""
                                    }
                                >
                                    Login
                                </NavLink>

                            </button>
                        </div>

                    </div> */}

                    <div className="navbar-end flex justify-end items-center gap-3">

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className=" lg:hidden text-2xl h-5 w-5">
                                <GiHamburgerMenu></GiHamburgerMenu>

                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box min-w-max">
                                {navLinks}
                            </ul>
                        </div>


                        {
                            user?.email ?
                                <div className="text-center">
                                    <div className="hidden lg:block">
                                        <div className="">
                                            <label tabIndex={0} className="avatar">
                                                <div className=" w-16 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>

                                        </div>
                                        <p className=" text-center">{user.displayName}</p>
                                        <p className="">{user.email}</p>


                                        <button onClick={handleLogOut} className="btn text-lg font-semibold text-slate-600">
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </button>


                                    </div>


                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="avatar lg:hidden w-12">

                                            <div className=" w-16 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>


                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                            <li> <p className=" text-center">{user.displayName}</p></li>
                                            <li><p className="">{user.email}</p></li>
                                            <li><button onClick={handleLogOut} className="btn text-lg font-semibold text-slate-600">
                                                <NavLink
                                                    to="/login"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                                                    }
                                                >
                                                    Logout
                                                </NavLink>
                                            </button></li>
                                        </ul>
                                    </div>

                                </div>
                                :

                                <div className="flex justify-center items-center gap-3">

                                    <label tabIndex={0} className="avatar">
                                        <div className="">
                                            <IoIosPerson className="text-4xl text-rose-600  "></IoIosPerson>
                                        </div>
                                    </label>

                                    <button className="text-lg lg:text-xl font-semibold text-slate-600">
                                        <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "  text-rose-500 font-bold" : ""
                                            }
                                        >
                                            Login
                                        </NavLink>

                                    </button>
                                </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;