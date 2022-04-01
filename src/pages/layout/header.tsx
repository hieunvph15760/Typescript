import React, { useEffect, useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import { FaSearch,FaShoppingCart,FaSignInAlt } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import {useForm,SubmitHandler} from "react-hook-form";
import logo from "../../img/logo.png";
import { searchProduct } from "../../api/products";

type TypeSearch = {
    name:string
}

type dataType = {
    _id:string,
    name:string,
    price:string|number,
    sale:number,
    image:string,
    category:string,
    description:string  
}

function Header(){

    const navigate = useNavigate();
    
    const [input,inputValue] = useState<string>('');

    const[searchName,setNameValue] = useState<dataType[]>([]);

    const handleSearch = async () =>{
        const {data} = await searchProduct(input);
        setNameValue(data);
        console.log(data);
    }

    useEffect(()=>{
        handleSearch();
    },[]);

    const handlLogout = () =>{
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <React.Fragment>
        <div className="w-full h-auto bg-[#1e1e27]">
            <div className="text-[#acacac] w-5/6 m-auto h-14 flex justify-between items-center">
                <div className="w-2/4 h-full flex items-center text-sm text font-bold">
                    GIAO HÀNG MIỄN PHÍ TRÊN TOÀN QUỐC KHI MUA 5 SẢN PHẨM TRỞ LÊN !
                </div>
                <div className="w-2/4 h-full flex justify-end items-center text-sm font-bold">
                    {
                        localStorage.getItem('user') ? <div onClick={()=> handlLogout()}><Link to={'/'}>Đăng xuất</Link></div> : <div className="flex"><div className="mr-4"><Link to={'/signin'}><div className="flex"><div className="mt-1 mr-2"><FaSignInAlt/></div><div>Đăng nhập</div></div></Link></div><div><Link to={'/signup'}>Đăng ký</Link></div></div>
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
                        <li className="text-base mt-1"><label htmlFor="searchInput"><FaSearch/></label></li>
                        <li className="text-base text-white -mt-1"><div className="bg-black rounded-full flex items-center justify-center w-9 h-8"><Link to={'/cart'}><FaShoppingCart/></Link></div></li>
                        <input type="checkbox" name="" id="searchInput" hidden/>
                        <div className="fixed top-0 left-0 right-0  w-full h-full flex items-center" id="search">
                            <div className=" absolute right-10 top-10 text-5xl close">
                                <label htmlFor="searchInput"><AiFillCloseCircle/></label>
                            </div>
                            <form style={{width:'600px'}} className="m-auto h-auto">
                                <input type="text" placeholder="Tìm kiếm..." style={{width:'80%'}} className='py-3 rounded-lg pl-4 focus:outline-none' onChange={(event)=>inputValue(event.target.value)}/>
                                <button onClick={()=> handleSearch()} style={{width:'15%'}} type="button" className="bg-red-500 outline-none ml-3 py-3 rounded-lg text-white">Tìm kiếm</button>
                            </form>
                        </div>
                    </ul>
                </div>
            </div>
         </div>
        </React.Fragment>
    )
}

export default Header;