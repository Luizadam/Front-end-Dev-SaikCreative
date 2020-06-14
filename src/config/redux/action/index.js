import Axios from 'axios'
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
        console.log(res.data)
        dispatch({type:"CHANGE_USER",value:res.data})
    })
})
}
