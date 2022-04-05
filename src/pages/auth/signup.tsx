import React from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";

type signupType = {
    name:String,
    email:String,
    password:String
}

function Signup (){

    const navigate = useNavigate();

    const {register,handleSubmit} = useForm<signupType>();

    const onSubmit:SubmitHandler<signupType> = async (data) =>{
        const response = await signup(data);
        if(response.status === 200){
            alert('Đăng ký tài khoản thành công, chuyển đến trang Đăng Nhập !');
            navigate('/signin');
        }
    }

    return (
        <React.Fragment>
           <div className=" relative" style={{height:'650px',backgroundColor:'red',backgroundSize:'100%',backgroundImage:'url("https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp")'}}>
                <div className="bg-[#12111159] flex justify-center items-center w-full h-full">
                <div className="absolute h-auto w-80">
                    <h4 className="text text-[#fbfff2] text-2xl pb-10 font-bold">Đăng Ký Tài Khoản</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="flex"><input className="mb-5 text-white placeholder:text-[#fbfff2] py-3 bg-[#f7f4f40d] w-80 pl-5 rounded-3xl outline-none" type="text" placeholder="Tên" {...register('name')}/></p>
                        <p className="flex"><input className="mb-5 text-white placeholder:text-[#fbfff2] py-3 bg-[#f7f4f40d] w-80 pl-5 rounded-3xl outline-none" type="email" placeholder="Email" {...register('email')}/></p>
                        <p><input className="mb-5 text-white placeholder:text-[#fbfff2] py-3 bg-[#f7f4f40d] w-80 pl-5 rounded-3xl outline-none" type="password" placeholder="Mật khẩu"{...register('password')}/></p>
                        <p><button className="mb-5 font-medium text-[#00000e] py-3 w-80 bg-[#fbceb5] rounded-3xl" type="submit">Đăng ký</button></p>
                    </form>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;