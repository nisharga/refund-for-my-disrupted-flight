import React from 'react';
import { FaFacebookF, FaGithub, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BsDribbble, BsTwitter } from "react-icons/bs";

const Contact = () => {
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
                        <form action="" className='grid grid-cols-1 gap-y-5 pb-8 md:pb-0'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <input type="text" placeholder='Name' className='w-full bg-white rounded border border-gray-300 focus:outline-none focus:shadow-md focus:border-sky-300 px-3 py-3' />
                                </div>
                                <div>
                                    <input type="text" placeholder='Email' className='w-full bg-white rounded border border-gray-300 focus:outline-none focus:shadow-md focus:border-sky-300 px-3 py-3' />
                                </div>
                            </div>
                            <div>
                                <textarea name="" id="" rows={4} className='w-full bg-white rounded border border-gray-300 focus:outline-none focus:shadow-md focus:border-sky-300 p-3' placeholder='Give Your Feedback..........'></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className='py-3.5 px-11 scroll-smooth text-base font-medium rounded-full bg-gray-800 text-white transition-all duration-500 hover:bg-gray-600'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;