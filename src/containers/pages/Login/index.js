import React, { Component } from 'react';
import './login.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAkun} from '../../../config/redux/action'

class index extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit  =  () => {
        const {email,password} = this.state
        if(this.state.email === "" || !this.state.password === ""){
            alert("lengkapi data anda!!")
        }
        else{
         this.props.loginAkun({email,password})
        }
        
    }
    render() {
        
        return (
            <div className="loginPage">
                <div className="card" id="cardLogin">
        <span className="text-center mb-5"><h3>WELCOME</h3></span>
                    <div className="card-body mt-5" >
                        <div className="form-group">
                            <input type="email" className="form-control mb-3 inputEmail" id="email" placeholder="Username" onChange={this.handleChange}/>
                            <input type="password" className="form-control inputPass mt-4" id="password"placeholder="Password" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary btnLogin mt-4" onClick={this.handleSubmit}>LOGIN</button>
                        <ul className="descLogin">
                            <li><p>Forgot <Link to="forgot">Password ?</Link></p></li>
                            <li><p>Don’t have an account? <Link to="register">Sign up</Link></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      user: state.user
    
    };
  };

const loginDispatch = (dispatch) => ({
    loginAkun : (dataLogin) => dispatch (loginAkun(dataLogin))
})

export default connect (mapStateToProps,loginDispatch)(index);