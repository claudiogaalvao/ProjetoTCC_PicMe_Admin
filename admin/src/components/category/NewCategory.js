import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../../store/actions/categoryActions';
import Noty from "noty";

class NewCategory extends Component {
    state = {
        name: '',
        qtdMin: 0,
        price: 0,
        acceptedTypes: []
    }

    handleChange = (e) => {    
        if(e.target.id === "acceptedTypes"){
            const acceptedTypes = this.state.acceptedTypes;
            const indexItem = acceptedTypes.indexOf(e.target.value)

            if(indexItem === -1) {

                acceptedTypes[acceptedTypes.length] = e.target.value;
            } else {

                acceptedTypes.splice(indexItem, 1);
            }
            
            this.setState({
                acceptedTypes: acceptedTypes
            })
        
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var messageError = "";       

        if (this.state.name === ""){
            messageError = "Insira o nome";
        }
        if (!this.state.name.match(/^[a-zA-Z]+$/) && this.state.name != ""){
            messageError = "O nome só pode conter letras"
        }
        if (this.state.price === ""){
            messageError ="Insira o preço"; 
        }
        if (this.state.qtdMin === ""){
                messageError ="Insira a quantidade mínima"; 
         }

        if (this.state.acceptedTypes.length === 0){
                messageError ="Selecione algum device"; 
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
            this.props.createCategory(this.state);
        
            this.setState({
                name: '',
                qtdMin: 0,
                price: 0,
                acceptedTypes: []
            });
            window.history.back();
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

    render() {
        
        return (
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-12">
                                    
                                <div className="card mb-4 py-3 border-bottom-info">
                                    <div className="card-body">
                                        <h1 className="h3 mb-1 text-gray-800">Nova categoria</h1>

                                        <hr className="sidebar-divider"></hr>

                                        <form onSubmit={this.handleSubmit} ref={(el) => this.formCategory = el}>
                                            <div class="form-row">
                                                <div class="form-group col-md-4">
                                                    <label for="name">Nome</label>
                                                    <input type="text" class="form-control" id="name" onChange={this.handleChange}/>
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label for="price">Preço unitário das fotos</label>
                                                    <input type="number" min="0" class="form-control" id="price" onChange={this.handleChange}/>
                                                </div>

                                                <div class="form-group col-md-4">
                                                <label for="qtdMin">Quantidade mínima de fotos</label>
                                                <input type="number" min="0" class="form-control" id="qtdMin" onChange={this.handleChange}/>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label >Selecione os devices que serão aceitos</label>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="acceptedTypes" value="Celular" onChange={this.handleChange}/>
                                                    <label class="form-check-label" for="acceptedTypes">Celular</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="acceptedTypes" value="Camera Semi-profissional" onChange={this.handleChange}/>
                                                    <label class="form-check-label" for="acceptedTypes">Câmera Semi-profissional</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="acceptedTypes" value="Drone" onChange={this.handleChange}/>
                                                    <label class="form-check-label" for="acceptedTypes">Drone</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="acceptedTypes" value="GoPro" onChange={this.handleChange}/>
                                                    <label class="form-check-label" for="acceptedTypes">GoPro</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="acceptedTypes" value="Camera Profissional" onChange={this.handleChange}/>
                                                    <label class="form-check-label" for="acceptedTypes">Câmera Profissional</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="acceptedTypes" value="Polaroid" onChange={this.handleChange}/>
                                                    <label class="form-check-label" for="acceptedTypes">Polaroid</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button onClick={this.handleClickCancel}
                                                            class="btn btn-danger">Cancelar</button>
                                                        </div>
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
        createCategory: (category) => dispatch(createCategory(category))
    }
}

export default connect(null, mapDispatchToProps)(NewCategory)
