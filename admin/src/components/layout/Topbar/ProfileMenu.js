import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ProfileMenu = (props) => {
    const { auth, profile } = props;
    if(!auth.uid) return <Redirect to='/'/>
    return (
        <li class="nav-item dropdown no-arrow">
            <div class="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{profile.firstName} {profile.lastName}</span>
                <img class="img-profile rounded-circle" alt="profile" src="http://www.institutoexponencial.com.br/wp-content/uploads/2018/05/student-profile-gabriela-mills-college.jpg"></img>
            </div>
            
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <div class="dropdown-item" >
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
                </div>
                <div class="dropdown-item" >
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
                </div>
                <div class="dropdown-item" >
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
                </div>
                <div class="dropdown-divider"></div>
                <div class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    <NavLink onClick={props.signOut}>Logout</NavLink>
                </div>
            </div>
        </li>  
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)