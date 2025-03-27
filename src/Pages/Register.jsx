

import Lottie from 'lottie-react';
import registerLottie from './../assets/lottie/register.json'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import GoogleLogin from '../social-login/GoogleLogin';
import { Helmet } from 'react-helmet-async';


const Register = () => {

    const { createUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();



    const handleRegister = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.checked;
    
        const user = { name, email };
    
        // password validation
        if(!checkbox){
            toast.error('Please accept our terms & conditions.');
            return;
        }
    
        if(password.length < 6) {
            toast.error('Password should be 6 characters or longer');
            return;
        }
    
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
        if(!(passwordRegex).test(password)) {
            toast.error('Password should contain at least one uppercase, one lowercase, one number, one special character!');
        }
    
        createUser(email, password)
        .then(result => {


// create user entry in the database
axiosPublic.post('/users', user)
.then(res => {
    if(res.data.insertedId) {
        form.reset();
        Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Congratulations!',
            text: "User Created Successfully",
            showConfirmButton: true,
        });
        navigate('/');
    }
})
})
.catch(error => {
console.log(error.message);
})

}





    return (

        <div 
        style={{backgroundImage: `url('https://i.ibb.co.com/dJ03KTrt/5376788.jpg')`}}
        className='bg-cover mx-12 md:mx-24 mt-24'>

            <Helmet>
                <title>CHILL GAMER | REGISTER</title>
            </Helmet>

        <div className="w-10/12 mx-auto py-56 grid grid-cols-2 gap-6 container">

        <Lottie className="col-span-1" animationData={registerLottie}></Lottie>

        <div className="col-span-1">
            <h3 className="text-white text-3xl font-semibold text-center mb-4 underline">Register</h3>
            <h1 className="text-4xl text-orange-500 font-bold my-8 text-center uppercase">Start for free Today</h1>
            <p className="text-base text-white font-normal text-center">Access to all features. No credit card required.</p>

            {/* Google login */}

            <GoogleLogin></GoogleLogin>

            <p className="my-8 text-center text-white text-2xl underline">Or Continue With</p>
            
            <form 
            onSubmit={handleRegister}
            className="space-y-3 bg-white p-12 rounded-md shadow-lg">

              {/* form */}
            
            <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-normal">Full Name *</span>
                </div>
            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-normal">E-mail *</span>
                </div>
            <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered w-full" />
            </label>


            <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-normal">Password *</span>
                </div>
            <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered w-full" />
            </label>

            <div className="form-control flex justify-end my-4">
            <label className="flex items-center gap-3">
                <input type="checkbox" name="checkbox" className="checkbox checkbox-accent" />
                <span className="label-text text-base font-normal">Agree our terms and policy</span>
            </label>
            </div>

            <input className="bg-[#023047] text-white text-xl font-semibold w-full btn py-2 rounded cursor-pointer uppercase" type="submit" value="Submit & Register" />

            </form>
            <p className="text-lg text-white font-semibold text-center my-5">Already have an account? <Link className="underline text-xl text-white font-bold hover:text-warning uppercase" to="/signin">Sign In</Link></p>

        </div>
    </div>
    </div>
    );
};

export default Register;