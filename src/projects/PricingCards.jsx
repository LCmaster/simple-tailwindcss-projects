import React from 'react';

function PricingCards() {
    // Design inspired by https://uidesigndaily.com/posts/xd-pricing-cards-card-dark-theme-mode-day-1449

    const plans = [
        {
            name: "Basic",
            storage: '100GB',
            price: "1,7",
            options: [
                "100 GB storage",
                "Option to add members",
                "Extra member benefits",
            ]
        },
        {
            name: "Standard",
            storage: '200GB',
            price: "2,9",
            options: [
                "200 GB storage",
                "Option to add members",
                "Extra member benefits",
            ]
        },
        {
            name: "Premium",
            storage: '2TB',
            price: "8,9",
            options: [
                "2 TB storage",
                "Option to add members",
                "Extra member benefits",
            ]
        },
    ];
    return (
        <div className='flex flex-col md:flex-row my-6 md:my-0 space-y-6 md:space-y-0 md:space-x-6'>
            {
                plans.map((plan, i) => {
                    return (
                        <div key={i} className='group p-2 divide-y divide-[#545C70] rounded-xl bg-[#545C70] hover:bg-[#7B3BF3] transform duration-200'>
                            <div className="py-8 px-12 pricing flex flex-col gap-8 items-center  rounded-t-xl bg-zinc-700">
                                <h3 className='text-xs text-center uppercase text-white'>{plan.name}</h3>
                                <div className="space-y-1">
                                    <h2 className='font-serif text-5xl text-center text-white'>{plan.storage}</h2>
                                    <p className='font-serif text-xs text-center text-white'>
                                        1 month, then ${plan.price}/month
                                    </p>
                                </div>
                                <button className="px-8 py-2 text-sm border border-[#7B3BF3] rounded-md text-white group-hover:bg-[#7B3BF3] group-hover:hover:bg-[#8c58ec]">Purchase</button>
                            </div>
                            <ul role='list' className='py-10 px-12 text-xs text-center text-white space-y-2  rounded-b-xl bg-zinc-700'>
                                {plan.options.map((option, j) => <li key={j}>✓ {option}</li>)}
                            </ul>
                        </div>
                    );
                }
                )}
        </div>
    );
}

export default PricingCards;