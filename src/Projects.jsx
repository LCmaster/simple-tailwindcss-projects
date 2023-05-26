import React from 'react';
import { Outlet } from 'react-router-dom';

function Projects() {
    return (
        <div className='project min-h-screen flex items-center justify-center bg-zinc-700'>
            <Outlet />
        </div>
    );
}

export default Projects;