import React from 'react';
import { Route } from 'react-router-dom';
import Topbar from './../layout/Topbar/Topbar'
import Slidebar from './../layout/Slidebar/Slidebar';
import PhotographerPendingList from './../pendings/PhotographerPendingList';
import PhotographerPendingDetails from './../pendings/PhotographerPendingDetails';
import AdministratorPendingList from './../pendings/AdministratorPendingList';
import Devices from './../devices/Devices';
import NewDevice from './../devices/NewDevice';
import Category from './../category/Category';
import NewCategory from './../category/NewCategory';

const Dashboard = () => {
    return (
        <div id="wrapper">

          <Slidebar/>

          <div id="content-wrapper" class="d-flex flex-column">

              <div id="content">
                <Topbar/>
                <Route exact path='/internal/analyse/photographer' component={PhotographerPendingList} />
                <Route path='/internal/analyse/photographer/:id' component={PhotographerPendingDetails} />
                <Route exact path='/internal/analyse/administrator' component={AdministratorPendingList} />
                <Route exact path='/internal/devices/:device' component={Devices}/>  
                <Route path='/internal/devices/new/device' component={NewDevice}/>
                <Route exact path='/internal/category' component={Category}/>
                <Route path='/internal/category/new/category' component={NewCategory}/>
              </div>

          </div>
        </div>
    )
}

export default Dashboard