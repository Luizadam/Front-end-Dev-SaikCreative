import React, { Component } from 'react';
import Axios from 'axios';
import history from '../../../history';


class index  extends Component  {
    state = {
        password:'',
        confirmPassword:'',
        erorMessage:'',
        errorConfirm:'',
        setAlert:''
    }
    
    handleChangePassword =(e)=> {
        const value = e.target.value
        this.setState({
            password:value
        })
        if(!value){
            this.setState({
                erorMessage:'password tidak boleh kosong'
            })
        }else{
            this.setState({
                erorMessage:''
            })
        }
        console.log(this.state.password)
    }

    handleChangeSetpassword = (e)=>{
        const value = e.target.value
        if(value != this.state.password){
            this.setState({
                errorConfirm:"password tidak sama"
            })
        }else{
            this.setState({
                confirmPassword:value,
                errorConfirm:''
            })
        }
    }

    handleSave = () => {
        Axios({
            method:"PUT",
            url:"http://localhost:3001/resetpassword",
            data:{
                password:this.state.confirmPassword,
                token:this.props.match.params.token
            }
        }).then(response => {
            this.setState({
                password:'',
                confirmPassword:'',
                setAlert:'password berhasil diubah!'
            })
            history.push('/login')
        })
    }
    render() {
        return (
            <div className="loginPage">
                <div className="card" id="cardLogin">
                    <div className="card-body mt-5" >
                        {
                            this.state.setAlert&&(
                                <div className="alert alert-success">
                                    {this.state.setAlert}
                                </div>
                            )
                        }
                        <div className="form-group">
                            <input type="password" className="form-control mb-3 inputEmail" id="password" placeholder="Password" onChange={this.handleChangePassword}/>
                            {
                                this.state.erorMessage &&(
                                <p className="text-danger">{this.state.erorMessage}</p>
                                )
                            }
                            <input type="password" className="form-control inputPass mt-4" id="confirmPassword"placeholder="Confirm Password" onChange={this.handleChangeSetpassword}/>
                            {
                                this.state.errorConfirm&&(
                                <p className="text-danger">{this.state.errorConfirm}</p>
                                )
                            }
                        </div>
                        <button className="btn btn-primary btnLogin mt-4" onClick={this.handleSave}>SAVE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;