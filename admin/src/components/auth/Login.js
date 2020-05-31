import React, { Component } from 'react';
import Noty from "noty";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    notifyFireError = false

    componentDidMount() {
        document.body.classList.add("bg-gradient-primary");        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var messageError = "";

        console.log(this.state);
        if (this.state.email === ""){
            messageError = "Insira o e-mail";
        }
        if (this.state.password === ""){
            messageError = "Insira a senha";
        }

        if(messageError !== ""){
            new Noty({
                type:"error",
                layout: "topRight",
                text: messageError,
                timeout: 3000
    
            }).show()
        messageError = "";
        }
        else{
            
            this.props.signIn(this.state);
            this.setState({
                email: this.state.email,
                password: this.state.password
            })
            this.notifyFireError = true;
        }
    }

    handleError = () => {
        new Noty({
            type:"error",
            layout: "topRight",
            text: "Email ou senha inválido. Tente novamente!",
            timeout: 3000

        }).show()
    }

    handleSuccess = () => {
        new Noty({
            type:"success",
            layout: "topRight",
            text: "Pode entrar!",
            timeout: 3000

        }).show()
    }

    render() {
        const { auth, authError } = this.props;
        var response = authError ? authError : null;
        
        if(auth.uid) return <Redirect to='/internal/analyse/photographer'/>
        
        if(response !== null && this.notifyFireError === true){
            this.handleError();
            this.notifyFireError = false;
            
        }
        
        return (
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div className="col-lg-6">
                            <div className="p-5">
        
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Área Administrativa - PicMe App</h1>
                            </div>
        
                            <form className="user" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                <input  type="email" 
                                        className="form-control form-control-user" 
                                        id="email" 
                                        aria-describedby="emailHelp" 
                                        placeholder="E-mail"
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                <input  type="password" 
                                        className="form-control form-control-user" 
                                        id="password" 
                                        placeholder="Senha"
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                    <label className="custom-control-label" for="customCheck">Lembre-se de mim</label>
                                </div>
                                </div>

                                <input type="submit" value="Entrar" className="btn btn-primary btn-user btn-block"/>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
