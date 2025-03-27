import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateGame = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {  _id ,title, publishingYear, reviewDescription, rating, genres } = useLoaderData();


    const onSubmit = async (data) => {
        
        // image upload to img bb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                title: data.title,
                reviewDescription: data.reviewDescription,
                publishingYear: data.publishingYear,
                rating: data.rating,
                genres: data.genres,
                coverImage: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/review/${_id}`, menuItem);

            if(menuRes.data.modifiedCount > 0){
                // show success popup
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${data.title} is updated to the Game.`,
                    showConfirmButton: true,
                });
            }
        }
    };

    return (

    <div className="bg-white mx-12 md:mx-24 pb-56 pt-24">

        <Helmet>
            <title>CHILL GAMER | UPDATE GAME</title>
        </Helmet>

    <div className="bg-[#F4F3F0] py-12 px-28 my-36">

        <div className="text-center my-24">
            <h2 className="text-5xl text-orange-500 font-bold mb-12 uppercase">Update Game Details – Keep It Fresh!</h2>
            <p className="text-lg font-medium text-gray-600">Make changes to a game's information to keep it accurate and up to date. Whether it's new features, updates, or corrections, <br /> help the Chill Gamer community stay informed with the latest details. 🎮⚡</p>
        </div>

    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-12 rounded-md shadow-lg mb-24"
    >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

{/* input field */}



{/* Game Title */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Game Title *</span>
</div>
<input 
{...register('title', { required: true })}
defaultValue={title}
type="text" name="title" placeholder="Enter Title of the Game" className="text-[#1b1a1a99] text-[16px] font-normal border font-sans input input-bordered w-full" required />
{errors.name && <span className="text-red-600">Title is required</span>}
</label>
</div>


{/* Description */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Description *</span>
</div>
<textarea 
{...register('reviewDescription', { required: true })}
defaultValue={reviewDescription}
required className="textarea textarea-bordered text-base font-normal text-gray-500" name="reviewDescription" placeholder="Enter description of the game"></textarea>
{errors.name && <span className="text-red-600">Description is required</span>}
</label>
</div>



{/* Rating */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Rating *</span>
</div>
<input 
{...register('rating', { required: true })}
defaultValue={rating}
type="number" name="rating" placeholder="Enter rating of the game" className="text-[#1b1a1a99] text-[16px] font-normal font-sans input input-bordered w-full" required/>
{errors.name && <span className="text-red-600">Rating is required</span>}
</label>
</div>


{/* Publishing year */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Publishing Year</span>
</div>
<input 
{...register('publishingYear', { required: true })}
defaultValue={publishingYear}
type="number" name="publishingYear" placeholder="Enter published year of the game" className="text-[#1b1a1a99] text-[16px] font-normal font-sans input input-bordered w-full" required />
{errors.name && <span className="text-red-600">Publishing year is required</span>}
</label>
</div>


{/* Genre */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Genres</span>
</div>
<select 
{...register('genre', { required: true })}
defaultValue={genres} name="genre" required className="select text-base font-normal text-gray-500 select-bordered w-full">
    <option disabled>Select Genre of the game</option>
    <option>Action</option>
    <option>RPG</option>
    <option>Adventure</option>
    <option>Fantasy</option>
    <option>Science-Fiction</option>
    <option>Horror</option>
    <option>Survival</option>
    <option>Sports</option>
</select>
{errors.name && <span className="text-red-600">Please Choose One</span>}
</label>
</div>

<div></div>


{/* Image */}
<div className="form-control w-full my-6">
    <input 
    {...register('image', { required: true })}
    type="file" className="file-input w-full max-w-xs border" />
    {errors.name && <span className="text-red-600">Image is required</span>}
    </div>



<div></div>

</div>

<input type="submit" value="Update Review" className="btn bg-[#b8b8ff] w-full border-none border-[#331A15] rounded text-gray-600 text-2xl font-medium mt-12 uppercase" />

</form>
</div>
</div>
);
};

export default UpdateGame;
