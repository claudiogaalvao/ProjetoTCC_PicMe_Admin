import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDevice } from '../../store/actions/deviceActions';
import Noty from "noty";

class NewDevice extends Component {
    state = {
        type: '',
        brand: '',
        model: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var messageError = "";
        

        console.log(this.state.type);
        if (this.state.type === ""){
            messageError = "Insira o tipo";
        }
        if (this.state.brand === ""){
            messageError ="Insira a marca"; 
        }
        if (this.state.model === ""){
                messageError ="Insira o modelo"; 
         }

         if(messageError !== ""){
            new Noty({
                type:"error",
                layout: "topRight",
                text: messageError,
                timeout: 3000
    
            }).show()
        }
        else{
        this.props.createDevice(this.state);
        
        this.setState({
            type: '',
            brand: '',
            model: ''
        });
        this.formCategory.reset();
        }
    }

    handleError = (err) => {
        new Noty({
            type:"error",
            layout: "topRight",
            text: err,
            timeout: 3000
        }).show()        
    }

    handleClickCancel = (e) => {
        e.preventDefault();
        window.history.back();
    }

    render(){

        return (
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-12">
                                    
                                <div className="card mb-4 py-3 border-bottom-info">
                                    <div className="card-body">
                                        <h1 className="h3 mb-1 text-gray-800">Novo dispositivo</h1>

                                        <hr className="sidebar-divider"></hr>

                                        <form onSubmit={this.handleSubmit} ref={(el) => this.formCategory = el}>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="type">Escolha o tipo de dispositivo</label>
                                                    <select id="type" class="form-control" onChange={this.handleChange}>
                                                        <option selected>Tipo...</option>
                                                        <option>Celular</option>
                                                        <option>Camera Semi-Profissional</option>
                                                        <option>Camera Profissional</option>
                                                        <option>Drone</option>
                                                        <option>GoPro</option>
                                                        <option>Polaroid</option>
                                                    </select>
                                                </div>

                                                <div class="form-group col-md-6">
                                                <label for="brand">Escolha a marca</label>
                                                <select id="brand" class="form-control" onChange={this.handleChange}>
                                                    <option selected>Marca...</option>
                                                    <option>Asus</option>
                                                    <option>Apple</option>
                                                    <option>Google</option>
                                                    <option>Honor</option>
                                                    <option>Huawei</option>
                                                    <option>HTC</option>
                                                    <option>OnePlus</option>
                                                    <option>Samsumg</option>
                                                    <option>Xiaomi</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress">Modelo</label>
                                                <input type="text" class="form-control" id="model" onChange={this.handleChange} placeholder="Galaxy M30, iPhone XS Max, 20 Pro..."/>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        
                                        </form>
                                    
                                    </div>
                                </div>
                                
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDevice: (device) => dispatch(createDevice(device))
    }
}

export default connect(null, mapDispatchToProps)(NewDevice)
