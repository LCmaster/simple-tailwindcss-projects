import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Projects from './Projects.jsx';
import NoProjectFoundPage from './NoProjectFoundPage';
import EmailSubscribe from './projects/EmailSubscribe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoProjectFoundPage />,
  },
  {
    path: "projects",
    element: <Projects />,
    children: [
      { path: "email-subscription", element: <EmailSubscribe /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
