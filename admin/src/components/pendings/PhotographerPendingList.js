import React, { Component }  from 'react';
import PhotographerPendingSummary from './PhotographerPendingSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PhotographerPendingList extends Component {
    render() {
        const { photographers } = this.props;
        return (
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            <h1 className="h3 mb-1 text-gray-800">Solicitações de Fotógrafos</h1>
                            <p className="mb-4">Se todos os documentos foram enviados corretamente e os dados são consistentes, o fotógrafo está hábil a ser aprovado.</p>

                            <div className="row">
                                <div className="col-lg-12">

                                <div className="card mb-4 py-3 border-bottom-info">
                                    <div className="card-body">
                                    <table className="table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Primeiro nome</th>
                                            <th scope="col">Último nome</th>
                                            <th scope="col">Data da solicitação</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            { photographers && photographers.map(photographer=> {
                                                if(photographer.permission === false && photographer.active === true) {
                                                    return (
                                                        <PhotographerPendingSummary photographer={photographer} key={photographer.id} />
                                                    )
                                                }
                                                return (
                                                    <tr>
                                                        
                                                    </tr>
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
        photographers: state.firestore.ordered.photographers
    }
  }
  
  export default compose(
      connect(mapStateToProps),
      firestoreConnect([
          { collection: 'photographers' }
      ])
  )(PhotographerPendingList)