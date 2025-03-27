
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import DisplayGame from "../Components/DisplayGame";
import MidPart from "../Components/MidPart";
import CarouselGame from "../Components/CarouselGame";




const Home = () => {



    return (
        <div className="pb-32">

            <Helmet>
                <title>CHILL GAMER | HOME</title>
            </Helmet>

            <Banner></Banner>

            <div className="text-center my-24">
                <h2 className="text-6xl text-orange-600 font-bold mb-12 uppercase">Welcome to Chill Gamer <br /> – <br />Your Ultimate Gaming Hub!</h2>
                <p className="text-lg font-medium text-gray-600">Whether you're a casual player or a hardcore gamer, Chill Gamer brings you in-depth reviews, the latest gaming news, and expert recommendations. <br /> Stay updated, discover hidden gems, and find your next favorite game—all in a laid-back, gamer-friendly space. 🎮🔥</p>
            </div>

            <MidPart></MidPart>

            <div>
            <h2 className="text-center text-6xl text-pink-600 font-bold mb-12 uppercase">Game of the Month</h2>
            <p className="text-center mt-4 mb-24 text-xl font-semibold">Get ready for the most anticipated games of the year ! Discover the latest top-rated game. <br /> Whether you're a casual player or a hardcore gamer</p>
            </div>

            <div className="bg-gray-100 mx-12 md:mx-24">
                <DisplayGame></DisplayGame>
            </div>

            <div className="w-10/12 mx-auto mt-24">
                <div>
                    <h1 className="text-center text-6xl font-bold my-12 text-[#dc2f02]">World-Class Gamers – Legends of the <br /> Gaming Arena!</h1>
                    <p className="text-center text-xl font-bold text-gray-500 mb-24">Meet the top gamers who have mastered their craft! From speed runners to e sports champions, this section highlights the best in <br /> the gaming world. Get inspired by their skills, achievements, and journey to greatness. 🎮🏆🔥</p>
                </div>

                <CarouselGame></CarouselGame>
            </div>


</div>
    );
};

export default Home;