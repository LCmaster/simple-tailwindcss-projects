import React from 'react';
import image from '../assets/email-subscribe.jpg';

function EmailSubscribe() {
    // Design inspired by https://uidesigndaily.com/posts/studio-subscribe-card-form-day-1395
    return (
        <div className='p-2 mx-6 rounded-2xl bg-zinc-800'>
            <div className="flex flex-col md:flex-row">
                <img src={image} alt="" className='h-80 md:h-64 object-cover rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 duration-200' />
                <div className="content p-6 md:p-12">
                    <h3 className='font-serif text-xl font-semibold text-center md:text-left text-white'>Get diet and fitness tips in your inbox</h3>
                    <p className='mx-auto md:mx-0 max-w-xs my-4 text-sm leading-5 tracking-wide text-center md:text-left text-white'>Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
                    <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
                        <input
                            type='text'
                            placeholder='Enter your email address'
                            className='p-2 px-4 rounded-md text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-sm placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none'
                        />
                        <button className="px-5 py-3 text-sm rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-200">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailSubscribe;