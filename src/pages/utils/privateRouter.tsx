import React from "react";
import {Navigate} from "react-router-dom";
type privateRouterProps = {
    children:JSX.Element
}

function PrivateRouter(props:privateRouterProps){
    if(localStorage.getItem('user')){
        var users = JSON.parse(localStorage.getItem('user') || '');
    }
    if(!users){
        return <Navigate to={"/"} />
    }else if(users.user.role === 0){
        return <Navigate to={"/"} />
    }
    return props.children;
}

export default PrivateRouter;