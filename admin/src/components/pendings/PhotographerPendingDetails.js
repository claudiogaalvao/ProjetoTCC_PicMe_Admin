import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updatePhotographer } from '../../store/actions/photographerActions';
import { compose } from 'redux';
import { Redirect } from 'react-router'
import moment from 'moment';

class PhotographerPedingDetails extends Component {

    constructor(args){
        super(args)
        this.state = {
            redirect: false   
        }
    }

    handleClickApprove = (id) => {
        this.props.updatePhotographer(id, true)
        this.setState({
            redirect: true
        })
    }

    handleClickDisapprove = (id) => {
        this.props.updatePhotographer(id, false)
        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/internal/analyse/photographer" />
        }
        const id = this.props.match.params.id
        const { photographer } = this.props;
        if(photographer) {
            return (
                <div id="wrapper">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                    <div className="card mb-4 py-3 border-bottom-info">
                                        <div className="card-body">

                                            <Link to='/internal/analyse/photographer'>Voltar</Link>

                                            <div className="my-2"></div>

                                            <div className="card mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">Dados básicos</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label className="m-0 font-weight-bold" for="name">Nome</label>
                                                            <p id="name">{ photographer.firstName } { photographer.lastName } </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="m-0 font-weight-bold" for="birth">Data de nascimento</label>
                                                            <p id="birth">{moment(photographer.birthDate.toDate()).format('L')}</p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="m-0 font-weight-bold" for="cpf">CPF</label>
                                                            <p id="cpf">{ photographer.cpf } </p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label className="m-0 font-weight-bold" for="email">Email</label>
                                                            <p id="email">{ photographer.email } </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="m-0 font-weight-bold" for="phone">Telefone/Celular</label>
                                                            <p id="phone"> { photographer.phone } </p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label className="m-0 font-weight-bold" for="city">Cidade</label>
                                                            <p id="city">{ photographer.city } </p>
                                                        </div>
                                                        <div className="col-md-1">
                                                            <label className="m-0 font-weight-bold" for="state">Estado</label>
                                                            <p id="state"> { photographer.state } </p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="m-0 font-weight-bold" for="country">País</label>
                                                            <p id="country"> { photographer.country } </p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="m-0 font-weight-bold" for="zipCode">CEP</label>
                                                            <p id="zipCode"> { photographer.zipCode } </p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div className="card mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">Equipamentos</h6>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <th>#</th>
                                                            <th>Tipo</th>
                                                            <th>Marca</th>
                                                            <th>MOdelo</th>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                photographer.devices.map((element, index) =>                                                                     
                                                                    <tr>
                                                                        <th>{index}</th>
                                                                        <th>{element.type}</th>
                                                                        <th>{element.brand}</th>
                                                                        <th>{element.model}</th>
                                                                    </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">Documentos</h6>
                                                </div>
                                                <div className="card-body">

                                                <div className="row">
                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="thumbnail">
                                                            <img className="document_mini" src={photographer.photo} alt="..."/>
                                                            <div className="caption">
                                                                <h4>Documento: RG</h4>
                                                                <p>O RG deve ser comparado com os dados básicos enviados. Deve ser validado o nome, número do RG e validade do mesmo.</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <button className="btn btn-danger" onClick={() => this.handleClickDisapprove(id)}>Reprovar</button>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <button className="btn btn-success" onClick={() => this.handleClickApprove(id)}>Aprovar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                        
                                        </div>
                                    </div>
                                    
                                    </div>
                                
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="wrapper">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <div className="container-fluid">
                                Carregando fotógrafo...
                            </div>
                        </div>
                    </div>
                </div>
            
            )
        }
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const photographers = state.firestore.data.photographers;
    const photographer = photographers ? photographers[id] : null;
    return {
        photographer: photographer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePhotographer: (photographer) => dispatch(updatePhotographer(photographer))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'photographers' }
    ])
)(PhotographerPedingDetails)
