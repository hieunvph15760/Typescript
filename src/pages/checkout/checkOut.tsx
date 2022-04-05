
import React, { useEffect, useState } from 'react';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {GiReceiveMoney} from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

type ProductType = {
    _id:string,
    name:string,
    price:number,
    description:string,
    category:string,
    sale:number,
    image:string,
    quantity:number
}

function CheckOut() {

    const navigate = useNavigate();

    // Cart
    let cart:any = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart") || "");
            console.log(cart);
        }

    // Sum
    let sum:number = 0;
    let result:number = 0;

    const checkOut = () =>{
        console.log(234);
    }

    return (
        <React.Fragment>
        <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto">
                <div style={{borderBottom: '1px solid #ededed'}} className='flex pb-2 text font-medium'>
                    Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Chi tiết thanh toán
                </div>
            </div>
            <div className='w-5/6 m-auto h-auto flex justify-between mt-10'>
                
                    <form className='w-8/12'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Tên</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' style={{border:'1px solid #ededed'}} />
                            </div>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Họ</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' style={{border:'1px solid #ededed'}} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-full mt-3'>
                            <p className='mb-2'>Địa chỉ</p>
                            <input type="text" className='w-full h-10 rounded-sm outline-none' style={{border:'1px solid #ededed'}} />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Điện thoại</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' style={{border:'1px solid #ededed'}} />
                            </div>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Email</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' style={{border:'1px solid #ededed'}} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-full mt-3'>
                            <p className='mb-2'>Ghi chú</p>
                            <textarea className='w-full h-10 rounded-sm outline-none' style={{border:'1px solid #ededed'}} />
                        </div>
                    </form>
               
    
                <div className='w-3/12 bg-[#f4f0f0a0] rounded-sm h-auto'>
                    <div className='w-60 m-auto text-left mt-3 text-xl text font-bold pb-1' style={{borderBottom:'3px solid #ededed'}}>Đơn Hàng Của Bạn</div>
                    <div className='w-60 m-auto text-left mt-3 flex justify-around'>
                        <div className='text font-bold'>
                            Sản Phẩm
                        </div>
                        <div className='text font-bold'>
                            Giá
                        </div>
                    </div>
                    {/* Show cart */}
                    {
                        cart.map((item:ProductType)=>(
                            <div className='w-56 m-auto text-left mt-3 flex justify-between'>
                            <div className='text font-meidum'>
                                {item.name}
                            </div>
                            <div className='text font-bold text-red-500'>
                            {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(sum = (item.price - (item.price * item.sale / 100)) * item.quantity)}
                            </div>
                            <div className='hidden'>
                                {
                                    result += sum
                                }
                            </div>
                        </div>
                        ))
                    }

                     {/* Sum */}
                        <div className='w-56 m-auto text-left mt-3 flex justify-between'>
                            <div className='text font-meidum'>
                                Thành Tiền:
                            </div>
                            <div className='text font-bold text-red-500'>
                                 {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(result)}
                            </div>
                        </div>
                        
                        <div onClick={()=> checkOut()} className='w-56 m-auto mb-5 bg-[#f74877] font-bold text-xl rounded-sm mt-10 h-14 cursor-pointer flex items-center justify-center text-white'>
                                Mua Hàng
                        </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default CheckOut;