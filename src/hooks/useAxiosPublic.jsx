import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://chill-gamer-server-lyart.vercel.app"
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;