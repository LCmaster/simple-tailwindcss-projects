import React from 'react';
import { Outlet } from 'react-router-dom';

function Projects() {
    return (
        <div className='project'>
            <Outlet />
        </div>
    );
}

export default Projects;