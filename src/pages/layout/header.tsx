import React, { useEffect, useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import {FaShoppingCart,FaSignInAlt } from 'react-icons/fa';
import logo from "../../img/logo.png";

function Header(){

    const navigate = useNavigate();

    let users;
    if(localStorage.getItem('user')){
        users = JSON.parse(localStorage.getItem('user') || "");
    }

    const handlLogout = () =>{
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <React.Fragment>
        <div className="w-full h-auto bg-[#1e1e27]">
            <div className="text-[#acacac] w-5/6 m-auto h-10 flex justify-between items-center">
                <div className="w-2/4 h-full flex items-center text-xs text font-bold">
                    GIAO HÀNG MIỄN PHÍ TRÊN TOÀN QUỐC KHI MUA 5 SẢN PHẨM TRỞ LÊN !
                </div>
                <div className="w-2/4 h-full flex justify-end items-center text-xs font-bold">
                    <span>
                        {users ? users.user.role === 1 ? <div>Xin chào {users.user.name} <Link to={"/admin"}> <span className="px-3">Trang quản trị</span> </Link> </div>: <div className="mr-3">Xin chào {users.user.name}</div> : null}
                    </span>
                    {
                        users ? <div onClick={()=> handlLogout()}><Link to={'/'}>Đăng xuất</Link></div> : <div className="flex"><div className="mr-4"><Link to={'/signin'}><div className="flex"><div className="mt-1 mr-2"><FaSignInAlt/></div><div>Đăng nhập</div></div></Link></div><div><Link to={'/signup'}>Đăng ký</Link></div></div>
                    }
                </div>
            </div>
        </div>
         <div className="w-full h-auto bg-[#ffffff]">
            <div className="text-black w-5/6 m-auto h-24 flex justify-between items-center">
                <div className="w-2/4 h-full flex items-center text-sm">
                    <img className="w-15 h-10" src={logo} alt="" />
                </div>
                <div className="w-2/4 h-full flex items-center text-sm">
                    <ul className="flex w-full justify-between">
                        <li className="text text-base font-bold"><Link to={"/"}>Trang Chủ</Link></li>
                        <li className="text text-base font-bold"><Link to={"/products"}>Sản Phẩm</Link></li>
                        <li className="text text-base font-bold"><Link to={"/blog"}>Tin Tức</Link></li>
                        <li className="text text-base font-bold"><Link to={"/contact"}>Liên Hệ</Link></li>
                        <li className="text-base text-white -mt-1"><div className="bg-black rounded-full flex items-center justify-center w-9 h-8"><Link to={'/cart'}><FaShoppingCart/></Link></div></li>
                    </ul>
                </div>
            </div>
         </div>
        </React.Fragment>
    )
}

export default Header;