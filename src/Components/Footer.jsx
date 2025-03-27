import { Link } from 'react-router-dom';
import logo from './../assets/logo/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    return (

<div>

<div 
style={{backgroundImage: `url('https://i.ibb.co.com/dwkNnTKP/navbar-img.jpg')`}}
className="w-full bg-cover bg-center opacity-90 pt-16 pb-24">

<footer className="footer text-white flex flex-col items-center justify-center">
    <div className='flex items-center justify-center gap-4'>
        <img className='w-16 rounded-md' src={logo} alt="" />
        <h3 className='text-4xl font-bold'>Chill Gamer</h3>
    </div>
    <h1 className='text-6xl inline-flex font-extrabold uppercase'>Get  <span className='text-orange-500 mx-2 hover:underline'>Chill Gamer</span>  Right Now</h1>
    <p className='text-center text-xl font-bold'>Gaming has evolved into a multifaceted industry, encompassing video games, board games, and even interactive experiences. <br />
    It offers entertainment, challenges, and an opportunity for social connection</p>

<form className='flex flex-col items-center justify-center'>
    <h6 className="footer-title text-2xl font-bold text-white">Newsletter</h6>
    <fieldset className="form-control w-80">
    <label className="label">
        <span className="label-text text-xl text-white">Enter your email address</span>
    </label>
    <div className="join">
        <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item" />
        <button className="btn btn-primary join-item uppercase">Subscribe</button>
    </div>
    </fieldset>
</form>
</footer>
</div>

<div className='bg-[#457b9d] text-white py-8'>

    <div className='w-8/12 mx-auto flex justify-between items-center'>

        <h3 className='text-xl font-bold'>©2025 All Right Reserved By <span className='text-orange-500 underline'>CHILL GAMER</span></h3>
    <div className='flex items-center gap-4'>
        <Link><FaFacebook className='h-8 w-8  text-blue-600 rounded-full'></FaFacebook></Link>
        <Link><FaTwitter className='h-8 w-8 text-blue-600 rounded-full'></FaTwitter></Link>
        <Link><FaInstagram className='h-8 w-8 text-orange-700 rounded-full'></FaInstagram></Link>
    </div>

    </div>

</div>

</div>
);
};

export default Footer;