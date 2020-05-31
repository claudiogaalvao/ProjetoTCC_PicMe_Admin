import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/internal/analyse/photographer' className="rmv-decoration">
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3"><sup>PicMe</sup>Admin</div>        
            </div>
        </Link>
        
    )
}

export default Logo