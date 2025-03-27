import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://chill-gamer-server-lyart.vercel.app"
})

const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;