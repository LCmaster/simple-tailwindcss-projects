import React from 'react'

function App() {

  return (
    <div className='container mx-auto my-8 px-4'>
      <h1 className="text-2xl font-bold">Small Projects</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <div className="card h-32 bg-slate-100 rounded-xl flex gap-2">
          <div className="h-32 w-32 bg-slate-400 rounded-l-xl">
          </div>
          <h3 className="font-bold text-md"><a href="projects/email-subscribe">Email Subscription</a></h3>
        </div>
        <div className="card h-32 bg-slate-100 rounded-xl flex gap-2">
          <div className="h-32 w-32 bg-slate-400 rounded-l-xl">
          </div>
          <h3 className="font-bold text-md"><a href="projects/login-form">Login Form</a></h3>
        </div>

      </div>

    </div>
  )
}

export default App
