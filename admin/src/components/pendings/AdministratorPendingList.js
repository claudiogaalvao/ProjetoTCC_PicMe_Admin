import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import AdministratorPendingSummary from './AdministratorPendingSummary';
import { Link } from 'react-router-dom';

class administratorPendingList extends Component {
    render() {
        const { administrators } = this.props;
        return (
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            <h1 className="h3 mb-1 text-gray-800">Solicitações de Administradores</h1>
                            <p className="mb-4">Lista de administradores para serem aprovados ou reprovados.</p>

                            <div className="row">
                                <div className="col-lg-12">

                                <div className="card mb-4 py-3 border-bottom-info">
                                    <div className="card-body">
                                    <div>
                                            <Link to='#' className="btn btn-success">Novo Administrador</Link>
                                    </div>
                                    <hr className="sidebar-divider"/>
                                    <table className="table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Primeiro nome</th>
                                            <th scope="col">Último nome</th>
                                            <th scope="col">Data da solicitação</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            { administrators && administrators.map(administrator=> {
                                                return (
                                                    <AdministratorPendingSummary administrator={administrator} key={administrator.id} />
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    
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

const mapStateToProps = (state) => {
    return {
        administrators: state.firestore.ordered.admin
    }
  }
  
  export default compose(
      connect(mapStateToProps),
      firestoreConnect([
          { collection: 'admin' }
      ])
  )(administratorPendingList)