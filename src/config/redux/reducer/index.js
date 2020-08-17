const initState = { 
    isLogin : false,
    user:{},
    token:{}
}

const reducer = (state = initState, action ) =>{
    if (action.type === "CHANGE_ISLOGIN"){
        return{
            ...state,
            isLogin:action.value
        }
    }
    if (action.type === "CHANGE_USER"){
        return{
            ...state,
            user:action.value
        }
    }
    if (action.type === "CHANGE_TOKEN"){
        return{
            ...state,
            token:action.value
        }
    }
    return state;
}

export default reducer