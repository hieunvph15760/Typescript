import React from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { signin } from "../../api/auth";
import {useNavigate} from "react-router-dom";

type signinType = {
    name:string,
    email:string,
    password:string
}

function Signin (){

    const navigate = useNavigate();

    const {handleSubmit,register} = useForm<signinType>();

    const onSubmit:SubmitHandler<signinType> = async (data) => {
        const {data:user} = await signin(data);
        localStorage.setItem('user',JSON.stringify(user));
        console.log("ok");
        
        navigate('/');
    }


    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><input type="email" placeholder="Email" {...register('email')}/></p>
                <p><input type="text" placeholder="Password"{...register('password')}/></p>
                <p><button type="submit">Đăng nhập</button></p>
            </form>
        </React.Fragment>
    )
}

export default Signin;