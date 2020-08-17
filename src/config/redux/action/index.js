import Axios from 'axios'
import history from '../../../history'

export const registerAkun = (data) => (dispatch) => {
    Axios({
        method:"POST",
        url:"http://localhost:3001/register/",
        headers: {
            accept: 'application/json',
          },
        data:{
            fullname:data.Fullname,
            email:data.email,
            password:data.password 
        }
    })
    .then(res => {
        console.log("suksess")
        history.push('/')
    })
    
}

export const loginAkun = (dataLogin) => (dispatch) => {
    return new Promise((resolve, reject) => {
    Axios({
        method:"POST",
        url:"http://localhost:3001/login/",
        headers:{
            accept:'application/json',
        },
        data:{
            email:dataLogin.email,
            password:dataLogin.password
        }
    })
    .then(res => {
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user',JSON.stringify({
            fullname:res.data.user.fullname,
            email:res.data.user.email,
            isLogin:true
        }))
        history.push('/dashboard')
        dispatch({type:"CHANGE_USER",value:res.data.user})
        dispatch({type:"CHANGE_TOKEN",value:res.data.token})
        
    })
    .catch( err => {
        alert(err.response.data.message)
    })
    
})
}
