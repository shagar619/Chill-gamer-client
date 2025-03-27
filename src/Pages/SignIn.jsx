import Lottie from "lottie-react";
import signinLottie from './../assets/lottie/signin.json';
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import GoogleLogin from "../social-login/GoogleLogin";
import { Helmet } from "react-helmet-async";



const SignIn = () => {

    const { signInUser} = useContext(AuthContext);



    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
        .then(result => {
            form.reset();
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Successfully Login",
            });
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong E-mail or Password!",
            });
        })
    }

    return (

        <div 
        style={{backgroundImage: `url('https://i.ibb.co.com/dJ03KTrt/5376788.jpg')`}}
        className="mt-24 mx-12 md:mx-24">

            <Helmet>
                <title>CHILL GAMER | SIGN IN</title>
            </Helmet>

        <div className="w-10/12 mx-auto py-56 grid grid-cols-2 container">
            
        <Lottie className="col-span-1" animationData={signinLottie}></Lottie>

            <div className="col-span-1">
            <h3 className="text-white text-3xl font-semibold text-center mb-4 underline">Welcome Back!</h3>
            <h1 className="text-4xl text-pink-600 font-bold my-8 text-center uppercase">Member Login</h1>
            <p className="text-base text-white font-normal text-center">Access to all features. No credit card required.</p>

            {/* Google Login */}

            <GoogleLogin></GoogleLogin>


            <p className="my-8 text-center text-white text-2xl underline">Or Continue With</p>

            <form 
            onSubmit={handleSignIn}
            className="space-y-5 bg-white p-12 rounded-md shadow-lg">

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">E-mail *</span>
                </div>
                    <input type="email" name="email" placeholder="Enter Your email" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Password *</span>
                </div>
                    <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered w-full" />
            </label>

            <button 
            className="my-4 underline text-base text-gray-500 font-normal hover:text-black">Forgot password?</button>

            <input className="bg-[#023047] text-white text-xl font-bold w-full py-2 btn rounded cursor-pointer uppercase" type="submit" value="login" />

            </form>

            <p className="text-lg text-white font-semibold text-center my-5">Don't have an account? <Link className="underline text-xl font-bold hover:text-warning uppercase" to="/register">Sign Up</Link></p>
            
            </div>
        </div>
        </div>
    );
};

export default SignIn;