import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";

const Login = () => {
    const { googleLogin, loginWithEmailAndPassword, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
            googleLogin()
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Logged Successfully!',
                    '',
                    'success'
                  );
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry!',
                    text: err.message,
                  
                  })
                console.log(err)
            })

    };
    const handleLoginWithEmailAndPassword = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

            loginWithEmailAndPassword(email, password)
            .then(result => {
                     
                Swal.fire(
                    'Logged Successfully!',
                    '',
                    'success'
                  )
                // toast.success('Logged Successfully!')
                navigate(location?.state ? location.state : '/')
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
        <div className=" max-w-4xl mx-auto min-h-[70vh] px-3 mb-5   flex flex-col  justify-center items-center ">
            <h1 className=" text-5xl text-rose-600 font-bold mb-4">Login now!</h1>
            <div className="card card-body flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleLoginWithEmailAndPassword} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-slate-600 font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-slate-600 font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-rose-500 hover:bg-rose-700 text-white">Login</button>
                    </div>

                </form>

                <button onClick={handleGoogleLogin} className="flex items-center justify-center  border-2 p-2 rounded-xl">
                    <div className="flex gap-2  ">
                        <FcGoogle className="text-3xl "></FcGoogle>
                        <p className="font-semibold">Login with google</p>
                    </div>

                </button>
                <p className="font-medium text-center text-slate-600">Don't have an account? Please <Link className=" text-rose-700 underline font-bold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;