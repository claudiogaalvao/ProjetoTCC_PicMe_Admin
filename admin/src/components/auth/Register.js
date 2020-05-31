import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
//import { Redirect } from 'react-router-dom';
import Noty from "noty";

var regex = /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        repassword: '',
        firstName: '',
        lastName: ''
    }
    notifyFireError = false

    componentDidMount() {
        document.body.classList.add("bg-gradient-primary")
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var messageError = "";

        console.log(this.state.firstName);
        if (this.state.firstName === ""){
            messageError = "Insira o nome";
        }
        if (this.state.lastName === ""){
            messageError ="Insira o último nome"; 
        }
        if (this.state.password === ""){
            messageError ="Insira a senha"; 
        }
        if (this.state.repassword === ""){
            messageError ="Confirme a senha"; 
        }
        if (this.state.email=== ""){
            messageError ="Insira o email"; 
        }

        if(this.state.password !== this.state.repassword){
            messageError ="Senhas não conferem! Preencha novamente";
        }

        if(this.state.password.length < 8)
        {
            messageError ="A senha deve conter no minímo 8 digitos!";
        }
        if(!regex.exec(this.state.password))
        {
            messageError ="A senha deve conter no mínimo 3 caracteres em maiúsculo, 2 números e 1 caractere especial!";
        }

        if(messageError !== ""){
            new Noty({
                type:"error",
                layout: "topRight",
                text: messageError,
                timeout: 3000
    
            }).show()
            messageError = ""
            
        } else {
            this.props.signUp(this.state)
            this.setState({
                email: this.state.email,
                password: this.state.password,
                repassword: this.state.repassword,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
            this.notifyFireError = true
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

    render() {
        var { auth, authError } = this.props;
        var response = authError ? authError : null;
        
        if(auth.uid) {       
            new Noty({
                type:"success",
                layout: "topRight",
                text: "Cadastro enviado para análise!",
                timeout: 3000
    
            }).show()

            this.notifyFireError = false

            return "";
            //return <Redirect to='/'/>
        }

        if(response !== null && this.notifyFireError === true) {
            console.log("this.state 3")
            console.log(this.state)
            this.handleError(authError);
            this.notifyFireError = false;
        }      

        return (
            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                    
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Criar uma conta!</h1>
                            </div>
                            <form className="user" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                <input  type="text" 
                                        className="form-control form-control-user" 
                                        id="firstName" 
                                        placeholder="Primeiro nome"
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-6">
                                <input  type="text" 
                                        className="form-control form-control-user" 
                                        id="lastName" 
                                        placeholder="Último nome"
                                        onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input  type="email" 
                                        className="form-control form-control-user" 
                                        id="email" 
                                        placeholder="Digite seu e-mail"
                                        onChange={this.handleChange}/>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input  type="password"
                                            className="form-control form-control-user" 
                                            id="password"
                                            placeholder="Digite sua senha"
                                            onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-6">
                                    <input  type="password" 
                                            className="form-control form-control-user" 
                                            id="repassword" 
                                            placeholder="Repita sua senha"
                                            onChange={this.handleChange}/>                                    
                                </div>
                            </div>
                            
                            <input type="submit" value="Criar conta" className="btn btn-primary btn-user btn-block"/>
                            <hr/>
                            <div className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw"></i> Registrar-se com Google
                            </div>
                            <div className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw"></i> Registrar-se com Facebook
                            </div>
                            </form>
                            <hr/>
                            <div className="text-center">
                            <div className="small" >Esqueceu a senha?</div>
                            </div>
                            <div className="text-center">
                                <div className="small" >
                                    <Link to="/" className="rmv-decoration">Já possui uma conta? Entre aqui!</Link>
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
        signUp: (newAdmin) => dispatch(signUp(newAdmin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
