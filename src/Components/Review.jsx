import { Link } from "react-router-dom";

const Review = ({ review }) => {

    return (
        <div className="border p-6 rounded-md transition hover:scale-105 shadow-xl bg-white">
            <div>
                <img className="w-full h-64 rounded-lg" src={review.coverImage} alt="" />
            </div>
            <h2 className="text-2xl text-blue-600 font-bold text-center my-5 uppercase">{review.title}</h2>
            <h3 className="text-center text-orange-500 text-xl font-bold">Rating : {review.rating}</h3>
            <p className="text-center my-6"><Link to={`/review/${review._id}`}><button className="btn text-lg font-semibold text-gray-500 bg-[#a2d2ff] uppercase">Explore Details</button></Link></p>
        </div>
    );
};

export default Review;