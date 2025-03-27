import useReviews from "../hooks/useReviews";
import Review from "./Review";

const DisplayGame = () => {

    const [ reviews ] = useReviews();

    const topReview = reviews.filter((item) => item.rating > 4.7);


    return (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
            {
                topReview.map((review, idx) => <Review key={idx} review={review}></Review>)
            }
        </div>
    );
};

export default DisplayGame;