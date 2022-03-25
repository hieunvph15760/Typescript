import React from "react";
import {Link} from "react-router-dom";
import { FaSearch,FaShoppingCart } from 'react-icons/fa';
import logo from "../../../img/logo.png";

function Header(){
    return (
        <React.Fragment>
        <div className="w-full h-auto bg-[#1e1e27]">
            <div className="text-white w-5/6 m-auto h-14 flex justify-between items-center">
                <div className="w-2/4 h-full flex items-center text-sm">
                    GIAO HÀNG MIỄN PHÍ TRÊN TOÀN QUỐC KHI MUA 5 SẢN PHẨM TRỞ LÊN !
                </div>
                <div className="w-2/4 h-full flex justify-end items-center text-sm">
                    <div className="mr-4">Đăng nhập</div>
                    <div>Đăng ký</div>
                </div>
            </div>
        </div>
         <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-32 flex justify-between items-center">
                <div className="w-2/4 h-full flex items-center text-sm">
                    <img className="w-15 h-10" src={logo} alt="" />
                </div>
                <div className="w-2/4 h-full flex items-center text-sm">
                    <ul className="flex w-full justify-between">
                        <li className="text-base"><Link to={"/"}>Trang Chủ</Link></li>
                        <li className="text-base"><Link to={"/products"}>Sản Phẩm</Link></li>
                        <li className="text-base"><Link to={"/blog"}>Tin Tức</Link></li>
                        <li className="text-base"><Link to={"/contact"}>Liên Hệ</Link></li>
                        <li className="text-base"><FaSearch/></li>
                        <li className="text-base"><FaShoppingCart/></li>
                    </ul>
                </div>
            </div>
         </div>
        </React.Fragment>
    )
}

export default Header;