import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class index extends Component {
    state={
        email:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.email === "") {
            alert("email tidak boleh kosong !!")
        }
    }
    render() {
        return (
            <div className="loginPage">
                <div className="card" id="cardLogin">
                    <span className="text-center mb-5"><h3>Forgot Password</h3></span>
                    <div className="card-body mt-5" >
                        <div className="form-group">
                            <input type="email" className="form-control mb-3 inputEmail" id="email" placeholder="Email" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary btnLogin mt-4" onClick={this.handleSubmit}>SEND</button>
                        <ul className="descLogin">
                            <li><p>have an account ? <Link to="/">Login</Link></p></li>
                            <li><p>Don’t have an account? <Link to="register">Sign up</Link></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;