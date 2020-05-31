import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Slidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Logo/>

            <hr className="sidebar-divider my-0"></hr>

            <li className="nav-item">
                <div className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></div>
            </li>

            <hr className="sidebar-divider"></hr>

            <div className="sidebar-heading">
                Análises
            </div>

            
            <li className="nav-item">    
                <Link to='/internal/analyse/photographer'>
                    <div className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Solicitações de Fotógrafo</span></div>
                </Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Gerenciamento
            </div>

            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Gerenciamento de equipamentos</span>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link to='/internal/devices/new/device' className="collapse-item rmv-decoration">Cadastrar equipamento</Link>
                        <Link to='/internal/devices/devices' className="collapse-item rmv-decoration">Lista de equipamentos</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">    
                <Link to='/internal/category'>
                    <div className="nav-link">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Gerenciamento de categorias</span></div>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}

export default Slidebar