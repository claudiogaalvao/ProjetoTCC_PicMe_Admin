import React, { Component } from 'react';
import DevicesSummary from './DevicesSummary';
import { disableDevice} from '../../store/actions/deviceActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ConfirmDeleteModal from './ConfirmDelete';
import Noty from "noty";

class Devices extends Component {

    state = {
        showModal: false,
        device: null
    }

    onDeviceDeleteClick = (device) => {
        this.setState({ showModal: true, device: device });
    }

    onCancelDelete = () => {
        this.setState({ showModal: false, device: null });
    }

    onConfirmDelete = (device) => {
        this.setState({
            showModal: false
        })

        this.props.disableDevice(device)

        this.showMessage("Equipamento excluído com sucesso!", "success")
    }

    showMessage = (message, type) => {
        new Noty({
            type: type,
            layout: "topRight",
            text: message,
            timeout: 3000
        }).show()  
    }

    render() {
        const { devices } = this.props;
        return (
            < >
                <ConfirmDeleteModal device={this.state.device} onDeleted={this.onConfirmDelete} onCancel={this.onCancelDelete} showModal={this.state.showModal}></ConfirmDeleteModal>
                
                <div id="wrapper">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <div className="container-fluid">
                                <h1 className="h3 mb-1 text-gray-800">Lista de Equipamentos</h1>
                                <p className="mb-4">Relação de todos os devices permitidos no aplicativo. Somente essas opções estarão disponíveis para que o fotógrafo registre como seu equipamento de trabalho.</p>

                                <div className="row">
                                    <div className="col-lg-12">

                                    <div className="card mb-4 py-3 border-bottom-info">
                                        <div className="card-body">

                                            <table className="table">
                                                <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">Tipo</th>
                                                    <th scope="col">Marca</th>
                                                    <th scope="col">Modelo</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    { devices && devices.map(device => { 
                                                        if(device.active) {
                                                            return (
                                                                <DevicesSummary onDeviceDelete={() => this.onDeviceDeleteClick(device)} device={device} key={device.id} />
                                                            ) 
                                                        } else {
                                                            return <></>
                                                        }
                                                                                              
                                                                         
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
            </>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        devices: state.firestore.ordered.devices
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        disableDevice: (device) => dispatch(disableDevice(device))
    }
}
  
export default compose (connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'devices' }
  ])
)(Devices)