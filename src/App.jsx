import React from 'react'
import emailSubscription from './assets/email-subscribe-thumbnail.png';
import pricingCards from './assets/pricing-cards-thumbnail.png';

function App() {

  const projects = [
    {
      title: "Newsletter Subscription",
      projectId: "email-subscription",
      thumbnail: emailSubscription,
    },
    {
      title: "Pricing Cards",
      projectId: "pricing-cards",
      thumbnail: pricingCards,
    }
  ];

  return (
    <div className='container mx-auto my-8 px-4'>
      <h1 className="text-2xl font-bold">Small Projects</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
        {
          projects.map((proj, i) => {
            return (
              <div key={i} className=" bg-slate-100 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <a href={`projects/${proj.projectId}`}>
                    <img src={proj.thumbnail} alt='Email Subscription Project' className='object-fit' />
                  </a>
                </div>
                <h3 className="p-2 text-md font-semibold text-center"><a href={`projects/${proj.projectId}`}>{proj.title}</a></h3>
              </div>
            );
          })
        }
      </div>

    </div>
  )
}

export default App
