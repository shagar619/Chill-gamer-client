
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useReviews from "../hooks/useReviews";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyReview = () => {


    const { user } = useAuth();
    const [ reviews, , refetch ] = useReviews();
    const axiosSecure = useAxiosSecure();

    const myReview = reviews.filter(item => item.email == user.email);



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/review/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your food item has been Deleted.",
                    icon: "success"
            });
            }
            })

            }
        });
    }




    return (

        <div className="bg-white mx-12 md:mx-24">

            <Helmet>
                <title>CHILL GAMER | MY REVIEWS</title>
            </Helmet>

        <div className="w-10/12 mx-auto pb-56 bg-slate-100">

            <div className="text-center my-24">
                <h2 className="text-5xl text-orange-500 font-bold pt-24 mb-12 uppercase">My Reviews – Your Gaming Journey!</h2>
                <p className="text-lg font-medium text-gray-600">Revisit all the games you've reviewed and see how your opinions stack up. Edit, update, or share your thoughts with the <br /> Chill Gamer community. Your insights help shape the ultimate gaming hub! 🎮📝</p>
            </div>

<div className="bg-white p-12 mx-36">


<div className="overflow-x-auto">
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
    <th>Update</th>
    <th>Delete</th>
</tr>
</thead>
<tbody>

    {
        myReview.map((item, idx) => 
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

            <th>
                <Link to={`/updateGame/${item._id}`}>
                    <button 
                    className="btn bg-green-500"><GrUpdate className="text-xl text-white"></GrUpdate></button>
                </Link>
            </th>

            <th>
                <button 
                onClick={() => handleDelete(item._id)}
                className="btn bg-[#B91C1C]"><RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line></button>
            </th>

        </tr>
        )
    }



</tbody>
</table>
</div>


</div>
</div>
</div>
);
};

export default MyReview;
