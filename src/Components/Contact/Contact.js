import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BsDribbble, BsTwitter } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Contact = () => {
    const {user} = useContext(AuthContext);
    const [countStar, setCountStar] = useState(0);
    const stars = [1, 2, 3, 4, 5];
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const howDoYouKnowUs = form.howDoYouKnowUs.value;
        const category = form.category.value;
        const rating = countStar;
        const feedback = form.feedback.value;
        const suggestions = "";
        const formData = {
            howDoYouKnowUs,
            category,
            rating,
            email: user?.email,
            feedback,
            suggestions
        }
        console.log(formData);
        fetch("http://localhost:5000/api/v1/query", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Feedback data: ", data);
                toast.success("Thanks for Your Feedback");
            })
            .catch(error => console.log("error: ", error))
    }
    return (
        <>
            <div className='h-[90%] container mx-auto p-6'>
                <div className='h-[90%] justify-center items-center flex flex-col-reverse md:flex-row lg:px-6 pt-8'>
                    <div className='w-full md:w-1/3 text-center md:text-left' data-aos="fade-right" data-duration="1500">
                        <h2 className='uppercase text-2xl font-semibold mb-3'>Address</h2>
                        <p className='text-lg mb-9'>
                            Dhaka, Bangladesh
                        </p>
                        <p className='text-lg mb-1 flex items-center justify-center md:justify-start gap-2'><span className='text-cyan-600'><FaPhone></FaPhone></span> <span>(+88) 017 2352 9543</span></p>
                        <p className='text-lg mb-1 flex items-center justify-center md:justify-start gap-2'><span className='text-teal-800'><FaWhatsapp></FaWhatsapp></span> <span>(+88) 017 2352 9543</span></p>
                        <p className='text-lg mb-7 flex items-center justify-center md:justify-start gap-2'><span className='text-rose-700'><FaEnvelope></FaEnvelope></span> <span className='break-all'>sjAI@gmail.com</span></p>
                        <h2 className='uppercase text-2xl font-semibold mb-4'>Follow Us</h2>
                        <div className='flex items-center justify-center md:justify-start gap-4'>
                            <FaFacebookF className='h-5 text-sky-400 hover:text-sky-700'></FaFacebookF>
                            <BsTwitter className='w-5 h-5 text-sky-200 hover:text-sky-400'></BsTwitter>
                            <BsDribbble className='w-5 h-5 text-rose-500 hover:text-rose-600'></BsDribbble>
                            <FaGithub className='w-5 h-5'></FaGithub>
                        </div>
                    </div>
                    <div className='w-full md:w-2/3' data-aos="fade-left" data-duration="1500">
                        <h2 className='uppercase text-center lg:text-left text-2xl font-semibold mb-5'>send a note</h2>
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-5 pb-8 md:pb-0'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <h2 className='text-base font-medium pb-1'>How Do You Know Us</h2>
                                    <select name="howDoYouKnowUs" className='w-full bg-white rounded border border-gray-300 focus:outline-none focus:shadow-md focus:border-sky-300 px-3 py-3'>
                                        <option value="facebook">Facebook</option>
                                        <option value="facebook">Twitter</option>
                                        <option value="facebook">Google</option>
                                        <option value="facebook">Youtube</option>
                                        <option value="facebook">Website</option>
                                        <option value="facebook">GitHub</option>
                                    </select>
                                </div>
                                <div>
                                    <h2 className='text-base font-medium pb-1'>Category</h2>
                                    <input type="text" name='category' placeholder='Category' className='w-full bg-white rounded border border-gray-300 focus:outline-none focus:shadow-md focus:border-sky-300 px-3 py-3' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-base font-medium pb-1'>Ratings</h2>
                                <div className='flex items-center gap-0.5'>
                                    {
                                        stars.map((star, i) => <p onClick={() => setCountStar(star)} key={i}>
                                            <AiOutlineStar className={`w-6 h-5 ${star <= countStar ? "text-yellow-500" : ""}`}></AiOutlineStar>
                                        </p>)
                                    }
                                </div>
                            </div>
                            <div>
                                <h2 className='text-base font-medium pb-1'>Feedback</h2>
                                <textarea name="feedback" id="" rows={4} className='w-full bg-white rounded border border-gray-300 focus:outline-none focus:shadow-md focus:border-sky-300 p-3' placeholder='Give Your Feedback..........'></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className='py-3.5 px-11 scroll-smooth text-base font-medium rounded-full bg-gray-800 text-white transition-all duration-500 hover:bg-gray-600'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;