import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { div } from "motion/react-client";


const DetailsReview = () => {

    const review = useLoaderData();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();




    const handleAddToWatchList = () => {

        if(user && user.email) {

            // send cart item to the database
            const listItem = {
                listId: review._id,
                email: user.email,
                name: user.displayName || user.name,
                coverImage: review.coverImage,
                title: review.title,
                genres: review.genres
            }
            axiosSecure.post("/watchList", listItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: `${review.title} Added to your WatchList`,
                        showConfirmButton: true,
                    });
                    // refetch cart to update the cart items count
                }
            })

        } else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
                }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    navigate('/signin', {state: {from: location}})
                }
            });
        }
    }




    return (
        <div className="bg-slate-100 mx-12 md:mx-24">

        <div className="w-8/12 mx-auto py-32">

            <Helmet>
                <title>CHILL GAMER | {review.title}</title>
            </Helmet>

            <div className="text-center mb-24">
                <h2 className="text-6xl text-orange-600 font-bold mt-24 mb-12 uppercase">Game Details – Dive Into the Action!</h2>
                <p className="text-lg font-medium text-gray-600">Get an in-depth look at this game, including reviews, ratings, and key insights. Discover what makes it great (or not), check out player feedback, and decide if it’s your next adventure. 🎮🔍</p>
            </div>

            <div>
                <img className="w-full h-[500px] rounded-lg" src={review.coverImage} alt="" />
            </div>
            <h2 className="text-center text-4xl font-bold my-9 text-blue-700 uppercase">{review.title}</h2>
            <p className="text-center text-base font-medium text-[#007f5f]">{review.reviewDescription}</p>
            <h4 className="text-center text-xl font-semibold text-orange-600 my-4">Rating : {review.rating}</h4>
            <h4 className="text-center text-xl font-semibold text-fuchsia-600">Published Year : {review.publishingYear}</h4>
            <h3 className="text-center text-xl font-bold my-4 text-[#f72585]">Genre : {review.genres}</h3>
            
            <p className="text-center my-6"><Link><button
            onClick={handleAddToWatchList}
            className="btn text-lg font-semibold bg-blue-600 text-white uppercase">Add to WatchList</button></Link></p>
        </div>
        </div>
    );
};

export default DetailsReview;