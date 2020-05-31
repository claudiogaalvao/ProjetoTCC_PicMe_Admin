import React, { Component} from 'react'
import { connect } from 'react-redux';
import { updateDevice} from '../../store/actions/deviceActions';
import { Link } from 'react-router-dom';
import Noty from "noty";

class DevicesSummary extends Component {

    state = {

        type: '',
        brand:'',
        model: '',
        editable: false,
        newType: '',
        newBrand: '',
        newModel: ''
    }

    componentWillMount(){

        this.setState({
            type: this.props.device.type,
            brand: this.props.device.brand,
            model: this.props.device.model,
            newType: this.props.device.type,
            newBrand: this.props.device.brand,
            newModel: this.props.device.model

        })
     
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    onClickUpdateDevice = () => {

        this.setState({
            editable: true
        })
    }

    onCancelUpdate = () => {
        this.setState({
            editable: false,
            newType: this.state.type,
            newBrand: this.state.brand,
            newModel: this.state.model

        })
    }

    showMessage = (message, type) => {
        new Noty({
            type: type,
            layout: "topRight",
            text: message,
            timeout: 3000
        }).show()  
    } 

    onConfirmUpdate = () => { 
        
        var messageError = "";   

        if(this.state.newType === ""){
            messageError = "Insira o tipo";
        }

        if (!this.state.newType.match(/^[a-zA-Z]+$/) && this.state.newType != "")  {
            messageError = "O tipo só pode conter letras" 
        }
        if(this.state.newBrand === ""){
            messageError = "Insira a marca";
        }
        if (!this.state.newBrand.match(/^[a-zA-Z]+$/) && this.state.newBrand != ""){
            messageError = "A marca só pode conter letras"
        }
        if(this.state.newModel === ""){
            messageError = "Insira o modelo";
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

        this.props.device.type = this.state.newType;
        this.props.device.brand = this.state.newBrand;
        this.props.device.model = this.state.newModel;

        this.props.updateDevice(this.props.device)

        this.showMessage("Equipamento salvo com sucesso!", "success")


        this.setState({
            editable: false,
            type: this.state.newType,
            brand: this.state.newBrand,
            model: this.state.newModel,
        
        })
        }
    }

    optionsType = () => {
        return (
            <select id="newType" class="form-control" onChange={this.handleChange} value={this.state.newType}>
                <option>Tipo...</option>
                <option>Celular</option>
                <option>Camera Semi-Profissional</option>
                <option>Camera Profissional</option>
                <option>Drone</option>
                <option>GoPro</option>
                <option>Polaroid</option>
            </select>
        )
    }

    optionsBrand = () => {
        return (
            <select id="newBrand" class="form-control" onChange={this.handleChange} value={this.state.newBrand}>
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
        )
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
        
        return(
            <tr>
                <td>{this.state.editable === true ? this.optionsType() : this.state.type}</td>

                <td>{this.state.editable === true ? this.optionsBrand() : this.state.brand}</td>

                <td>{this.state.editable === true ? 
                    <input type="text" class="form-control" id="newModel" onChange={this.handleChange} value={this.state.newModel} /> : 
                    this.state.model}</td>

                <td>{this.state.editable === true ? 
                    <button onClick={this.onConfirmUpdate} class="btn btn-success">Salvar</button> : 
                    <Link onClick={this.onClickUpdateDevice}><i class="fas fa-edit"></i></Link>}</td>

                <td>{this.state.editable === true ? 
                    <button onClick={this.onCancelUpdate} class="btn btn-danger">Cancelar</button> : 
                    <Link onClick={this.props.onDeviceDelete }><i class="fas fa-times"></i></Link>}</td>
            </tr>
        )

    }
    
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateDevice: (device) => dispatch(updateDevice(device))
    }
}

export default connect(null, mapDispatchToProps)(DevicesSummary)