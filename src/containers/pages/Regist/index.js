import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './regist.css'
import { connect } from 'react-redux';
import {registerAkun} from '../../../config/redux/action'

class index extends Component {
    state = {
        email:'',
        Fullname:'',
        password:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = () => {
        const {Fullname,email,password} = this.state
        if(this.state.email === "" || this.state.Fullname === ""||
        this.state.password === "" ){
            alert("lengkapi data anda!!")
        }else{
            this.props.regist({Fullname,email,password})
        }
    }
    render() {
        return (
        <div className="container-fluid" id="main">
            <div className="registPage">
                <div className="card" id="cardLogin">
                    <span className="text-center mb-3"><h3>REGIST YOUR ACCOUNT</h3></span>
                    <div className="card-body mt-3" >
                        <div className="form-group">
                            <input type="text" className="form-control mb-4 inputEmail" id="Fullname" placeholder="Full Name" onChange={this.handleChange}/>
                            <input type="email" className="form-control mb-4 inputEmail" id="email" placeholder="Email" onChange={this.handleChange}/>
                            <input type="password" className="form-control mb-3 inputPass" id="password"placeholder="Password" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary btnLogin mt-4" onClick={this.handleSubmit}>SIGN UP</button>
                        <ul className="descRegist">
                            <li><p>have an account? <Link to="/">Login</Link></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const reduxDispatch = (dispatch) => ({
    regist:(data) => dispatch(registerAkun(data))
})

export default connect(null,reduxDispatch)(index);