
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

    

    // Remove cart 
    const removeCart = (id:string) =>{
        cart = cart.filter((item:ProductType)=> item._id !== id)
        localStorage.setItem('cart',JSON.stringify(cart));
        navigate('/cart')
    }

    let [count,setCount] = useState<number>();

    const next = (i:number) =>{;
        setCount(i+=1);
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
               <div className='w-8/12'>
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
               </div>
                
                <div className='w-3/12 bg-[#f4f0f0a0] rounded-sm h-auto'>
                    <div className='w-60 m-auto text-left mt-3 text-xl text font-bold pb-1' style={{borderBottom:'3px solid #ededed'}}>Đơn Hàng Của Bạn</div>
                    <div className='w-60 m-auto text-left mt-3 flex justify-around'>
                        <div className='text font-meidum'>
                            Sản Phẩm
                        </div>
                        <div className='text font-meidum'>
                            Giá
                        </div>
                    </div>
                    {/* Show cart */}
                        <div className='w-56 m-auto text-left mt-3 flex justify-between'>
                            <div className='text font-meidum'>
                                iPhone 13 Pro Max
                            </div>
                            <div className='text font-bold text-red-500'>
                                20.000.000 đ
                            </div>
                        </div>
                        
                     {/* Sum */}
                        <div className='w-56 m-auto text-left mt-3 flex justify-between'>
                            <div className='text font-meidum'>
                                Thành Tiền:
                            </div>
                            <div className='text font-bold text-red-500'>
                                20.000.000 đ
                            </div>
                        </div>
                        
                        <div className='w-56 m-auto bg-[#f74877] font-bold text-xl rounded-sm mt-4 h-14 flex items-center justify-center text-white'>
                                Mua Hàng
                        </div>
                </div>
            </div>

            <div className='w-5/6 h-auto m-auto mt-4'>
                <div className='flex items-center'>
                    <div className='text-5xl'>
                        <GiReceiveMoney/>
                    </div>
                    <div className='ml-3 text-xl text font-medium'>Tổng Thanh Toán: <span className='text font-bold text-red-500'>{new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(result)}</span></div>
                    <div className='bg-[#f74877] w-24 h-7 text-white rounded-md flex items-center justify-center ml-3'>
                        Đặt hàng
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default CheckOut;