import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const GoogleLogin = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || "/";


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                Swal.fire({
                icon: "success",
                title: "Congratulation!",
                text: "Successfully Login With Google",
            });
            navigate(from, { replace: true });
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <button 
            onClick={handleSignInWithGoogle}
            className="flex btn justify-center items-center bg-blue-200 gap-4 py-2 border w-full text-xl font-semibold rounded-sm mt-8 hover:text-blue-600 uppercase"><FaGoogle className="text-blue-600"></FaGoogle>Sign Up With Google</button>
        </div>
    );
};

export default GoogleLogin;