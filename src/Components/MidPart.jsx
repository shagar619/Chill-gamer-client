

import MidImg from "./../assets/banner-img/bg-midPart.jpg";

const MidPart = () => {
    return (
        <div 
        style={{backgroundImage: `url('https://i.ibb.co.com/h1XgS4gV/wallpaperflare-com-wallpaper.jpg')`}}
        className='mt-24 relative bg-cover bg-fixed bg-center py-36 mb-24'>

        <div className='transition hover:scale-110 inset-0 bg-black bg-opacity-40 backdrop-blur-md w-8/12 mx-auto py-12 px-12'>    

        <div className='flex flex-col md:flex-row items-center gap-12'>

        <div className='flex-1'>
            <img src={MidImg} alt="" />
        </div>

        <div className='flex-1 text-white'>
            <h4 className='text-2xl font-semibold'>Welcome to</h4>
            <h3 className='text-5xl font-semibold my-4 uppercase'>Chill Gamer</h3>
            <p className='text-xl font-normal mb-4'>Welcome to Chill Gamer! Join our community of passionate gamers and discover in-depth reviews, insightful articles, and the latest gaming news .Your ultimate source for honest gaming reviews. Kick back, relax, and find your next favorite game. Discover your next adventure! Explore our game reviews and find the perfect title for you at Chill Gamer!</p>
            {/* <img className='my-8' src={MidImg} alt="" /> */}
            <button className='btn bg-blue-600 text-white text-lg font-semibold uppercase border-none'>Read More</button>
        </div>

        </div>
        </div>

        </div>
    );
};

export default MidPart;