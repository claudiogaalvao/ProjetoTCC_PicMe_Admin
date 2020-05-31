import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ConfirmDelete extends Component {



    render() {
        if (!this.props.device)
            return(<></>);
        
        return (
            <Modal show={this.props.showModal} >
                <Modal.Header>
                    <Modal.Title>Excluir equipamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja excluir a(o) {this.props.device.type} - {this.props.device.brand} - {this.props.device.model}?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onCancel} variant="secondary" >
                        Cancelar
                    </Button>
                    <Button onClick={() => this.props.onDeleted(this.props.device)} variant="primary" >
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
        
        )
    }
}


export default ConfirmDelete