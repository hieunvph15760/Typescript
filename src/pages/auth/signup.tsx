import React from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { signup } from "../../api/auth";

type signupType = {
    name:String,
    email:String,
    password:String
}

function Signup (){

    const {register,handleSubmit} = useForm<signupType>();

    const onSubmit:SubmitHandler<signupType> = (data) =>{
        signup(data);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><input type="text" placeholder="Name" {...register('name')} /></p>
                <p><input type="email" placeholder="Email" {...register('email')} /></p>
                <p><input type="text" placeholder="Password" {...register('password')} /></p>
                <p><button type="submit">Đăng ký</button></p>
            </form>
        </React.Fragment>
    )
}

export default Signup;