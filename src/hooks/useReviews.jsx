import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useReviews = () => {

    const axiosPublic = useAxiosPublic();

    const { data: reviews = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    })

    return [ reviews, loading, refetch ];
};

export default useReviews;