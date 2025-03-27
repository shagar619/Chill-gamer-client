import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const WatchList = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // tanstack query

    const { refetch ,data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/watchList?email=${user.email}`);
            return res.data;
        }
    })

    return (

    <div className="bg-white mx-12 md:mx-24">

        <Helmet>
            <title>CHILL GAMER | MY WATCH LIST</title>
        </Helmet>

    <div className="w-10/12 mx-auto bg-slate-100 pb-56">

        <div className="text-center my-24">
            <h2 className="text-5xl text-orange-500 font-bold mb-12 uppercase pt-24">My Watch List – Games to Play Next!</h2>
            <p className="text-lg font-medium text-gray-600">Keep track of the games you’re excited about! Your watch list helps you save titles for later, so you never miss out on <br /> your next great adventure. Ready to start playing? 🎮🔖</p>
        </div>


    <div className="overflow-x-auto w-8/12 mx-auto bg-white p-12 rounded-md shadow-lg">
    <h3 className="text-center text-4xl text-orange-400 font-bold mb-12 uppercase">Your Total Watch List : {cart.length}</h3>
    <table className="table w-full">
    {/* head */}
    <thead className="bg-[#457b9d] text-xl text-white font-semibold uppercase">
    <tr>
        <th>
            #
        </th>
        <th>Cover Image</th>
        <th>Title</th>
        <th>Genres</th>
    </tr>
    </thead>
    <tbody>

        {
            cart.map((item, idx) => 
            <tr key={item._id} className="text-[#737373] text-base font-normal hover">
                <th>
                    {idx + 1}
                </th>
                <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src={item.coverImage}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                </div>
                </td>
                <td>
                    {item.title}
                </td>
                <td>
                    {item.genres}
                </td>
            </tr>
            )
        }

    </tbody>
    </table>
    </div>
    </div>
    </div>
);
};

export default WatchList;