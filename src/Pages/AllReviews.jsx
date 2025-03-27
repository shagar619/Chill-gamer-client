import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import useReviews from "../hooks/useReviews";
import { Helmet } from "react-helmet-async";

const AllReviews = () => {

    const [ reviews ] = useReviews();


    return (

        <div className="bg-gray-100 mx-12 md:mx-24 pb-32">

            <Helmet>
                <title>CHILL GAMER | ALL REVIEWS</title>
            </Helmet>

        <div className="w-10/12 mx-auto my-32 space-y-8">

            <div className="text-center my-24">
                <h2 className="text-6xl text-orange-600 font-bold pt-16 mb-12 uppercase">Explore All Games – Your Next Adventure Awaits!</h2>
                <p className="text-lg font-medium text-gray-600">Browse our ever-growing collection of games, from AAA blockbusters to indie gems. Find detailed reviews, ratings, and recommendations  <br /> to help you choose your next gaming experience. Start exploring now! 🎮🔥</p>
            </div>

            {
                reviews.map((review, idx) => 
                <div key={idx} className=" flex justify-between items-center border p-8 rounded-lg transition hover:scale-105 shadow-xl">
                <div className="flex gap-8 items-center">
                    <div>
                        <img className="h-[300px] w-[500px] rounded-md" src={review.coverImage} alt="" />
                    </div>
                    <div>
                    <h2 className="text-4xl font-bold my-9 text-blue-700 uppercase">{review.title}</h2>
                    <h4 className="text-xl font-semibold text-orange-600 my-4">Rating : {review.rating}</h4>
                    <h4 className="text-xl font-semibold text-fuchsia-600">Published Year : {review.publishingYear}</h4>
                    <h3 className="text-xl font-bold my-4 text-[#f72585]">Genre : {review.genres}</h3>
                    </div>
                    </div>

                <div className="flex flex-col gap-4">
                    <Link to={`/review/${review._id}`}><button className="btn text-lg text-gray-500 font-semibold bg-[#a2d2ff] uppercase">Explore Details</button></Link>
                    {/* <Link><button className="btn text-lg font-semibold bg-[#a2d2ff]">Add to WatchList</button></Link>
                    <Link><button className="btn text-lg font-semibold bg-[#a2d2ff]">Delete From List</button></Link> */}
                </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default AllReviews;