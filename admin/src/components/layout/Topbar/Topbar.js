import React from 'react';
import ProfileMenu from './ProfileMenu';

const Topbar = () => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            
            <ul class="navbar-nav ml-auto">
                <ProfileMenu></ProfileMenu>   
            </ul>
        </nav>      
    )
}

export default Topbar