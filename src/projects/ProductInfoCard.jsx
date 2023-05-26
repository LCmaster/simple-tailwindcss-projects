import React from 'react';
import image from '../assets/headphone.png';
import { AiOutlineHeart, TbScale } from "react-icons/all";

function ProductInfoCard() {
    // Design inspired by https://uidesigndaily.com/posts/figma-product-info-ui-design-card-day-1575
    return (
        <div className='p-8 flex gap-4 bg-white rounded-xl'>
            <div className="w-40">
                <img src={image} alt="" className='object-fit' />
            </div>

            <div className="content max-w-xs flex flex-col gap-4 items-start text-blue-950">
                <div className="space-y-1">
                    <div className="inline-block pill-tag px-3 py-1 text-xs bg-blue-950 rounded-full text-white">Free shipping</div>
                    <h2 className='font-bold text-xl '>Razer Kraken kitty Edt Gaming Headset Quartz</h2>
                </div>

                <div className="space-y-1">
                    <p className="old-price text-xs line-through decoration-blue-950">1 599,-</p>
                    <p className="font-bold text-3xl">799,-</p>
                    <p className='font-light text-xs '>The offer is valid until April 3 or as long as stock lasts!</p>
                </div>

                <button className="purchase-btn primary-btn block w-full px-12 py-4 font-bold text-white bg-blue-500 border-b-4 border-b-blue-700 rounded-lg">Add to cart</button>
                <p className='group text-xs text-black font-semibold'><span class="inline-block group-hover:animate-pulse h-2 w-2 rounded-full bg-green-500"></span> 50+ pcs. in stock.</p>
                <div className="buttons w-full flex gap-2 ">
                    <button className="purchase-btn secondary-btn basis-1/2 py-2 flex justify-center items-center gap-1 font-semibold text-sm text-center border border-slate-500 rounded-lg">
                        <TbScale size={24} /> Add to cart
                    </button>
                    <button className="wishlist-btn secondary-btn basis-1/2 py-2 flex justify-center items-center gap-1 font-semibold text-sm text-center border border-slate-500 rounded-lg">
                        <AiOutlineHeart size={24} /> Add to whishlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoCard;