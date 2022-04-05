import React from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { signin } from "../../api/auth";
import {Link, useNavigate} from "react-router-dom";

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
            <div className=" relative" style={{height:'650px',backgroundColor:'red',backgroundSize:'100%',backgroundImage:'url("https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp")'}}>
                <div className="bg-[#12111159] flex justify-center items-center w-full h-full">
                <div className="absolute h-auto w-80">
                    <h4 className="text text-[#fbfff2] text-2xl pb-10 font-bold">Đăng Nhập Tài Khoản</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="flex"><input className="mb-5 text-white placeholder:text-[#fbfff2] py-3 bg-[#f7f4f40d] w-80 pl-5 rounded-3xl outline-none" type="email" placeholder="Email" {...register('email')}/></p>
                        <p><input className="mb-5 text-white placeholder:text-[#fbfff2] py-3 bg-[#f7f4f40d] w-80 pl-5 rounded-3xl outline-none" type="password" placeholder="Mật khẩu"{...register('password')}/></p>
                        <p className="mb-3 text-[#fbfff2] font-medium">Bạn chưa có tài khoản ? <Link to={"/signup"}>Đăng Ký Ngay</Link></p>
                        <p><button className="mb-5 font-medium text-[#00000e] py-3 w-80 bg-[#fbceb5] rounded-3xl" type="submit">Đăng nhập</button></p>
                    </form>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signin;