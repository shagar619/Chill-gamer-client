
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddReview = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {

        

        // image upload to img bb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers : {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success) {
            // now send the menu item data to the server with the image url
            const newReview = {
                name: data.name,
                email: data.email,
                title: data.title,
                reviewDescription: data.reviewDescription,
                genres: data.genre,
                rating: data.rating,
                publishingYear: data.publishingYear,
                coverImage: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/reviews', newReview)

            if(menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${data.title} is added to the Review.`,
                    showConfirmButton: true,
                });
            }
        }

    };






    return (

<div className="">

    <Helmet>
        <title>CHILL GAMER | ADD REVIEW</title>
    </Helmet>

    <div className="w-10/12 mx-auto bg-[#F4F3F0] py-24 px-28 my-36">
    <h3 className="text-orange-500 text-5xl font-bold text-center uppercase">Review Your Game</h3>
    <p className="text-center text-lg font-normal font-sans text-gray-500 my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

<form 
className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24"
onSubmit={handleSubmit(onSubmit)}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

{/* input field */}


{/* User Name */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">User Name</span>
</div>
<input 
{...register('name', { required: true })}
type="text" name="name" value={user?.displayName} className="text-[#1b1a1a99] text-[16px] font-normal font-sans input input-bordered w-full" required/>
</label>
</div>


{/* User E-mail */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">User E-mail</span>
</div>
<input 
{...register('email', { required: true })}
type="email" name="email" value={user?.email} className="text-[#1b1a1a99] text-[16px] font-normal font-sans input input-bordered w-full" required/>
</label>
</div>



{/* Game Title */}
<div>
<label className="form-control w-full">
<div className="label">
<span className="text-[#1b1a1acc] text-xl font-semibold font-sans mb-3">Game Title *</span>
</div>
<input 
{...register('title', { required: true })}
type="text" name="title" placeholder="Enter Title of the Game" className="text-[#1b1a1a99] text-[16px] font-normal font-sans input input-bordered w-full" required />
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
defaultValue={'Select JobType'} name="genre" required className="select text-base font-normal text-gray-500 select-bordered w-full">
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
    type="file" className="file-input w-full max-w-xs" />
    {errors.name && <span className="text-red-600">Image is required</span>}
    </div>



<div></div>


</div>


<input type="submit" value="Add Review" className="btn bg-[#b8b8ff] w-full border-none border-[#331A15] rounded text-gray-600 text-2xl font-medium mt-24 uppercase" />

</form>

</div>
</div>
);
};

export default AddReview;