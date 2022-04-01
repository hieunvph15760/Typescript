
import React,{useState,useEffect} from 'react';
import { getProduct } from '../../api/products';
import {useParams} from 'react-router-dom';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {GiReceiveMoney} from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import img_product from "../../img/product_3.png";

type ProductType = {
    _id:number|string,
    name:string,
    price:number,
    description:string,
    category:string
}

function Cart() {
    return (
        <React.Fragment>
        <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto">
                <div style={{borderBottom: '1px solid #ededed'}} className='flex pb-2 text font-medium'>
                    Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Giỏ hàng
                </div>
            </div>
            <div className='w-5/6 m-auto h-auto'>
               <div className='w-full h-auto mt-4' style={{border:'1px solid #ededed'}}>
                    <div className='w-full h-auto flex justify-between p-3 py-4' style={{borderBottom:'1px solid #ededed'}}>
                        <div className='w-1/4 text font-bold'>
                            SẢN PHẨM
                        </div>
                        <div className='w-1/5 text font-bold'>
                            GIÁ TIỀN
                        </div>
                        <div className='w-1/5 text font-bold'>
                            SỐ LƯỢNG
                        </div>
                        <div className='w-1/5 text font-bold'>
                            TỔNG TIỀN
                        </div>
                        <div>
                            
                        </div>
                    </div> 
                    <div className='w-full h-18 relative flex justify-between items-center p-3 py-5' style={{borderBottom:'1px solid #ededed'}}>
                        <div className='w-1/4 flex justify-start items-center'>
                            <div>
                                <img src={img_product} alt="" className='w-16' />
                            </div>
                            <div className='text font-medium'>Áo khoác trần bông Nam</div>
                        </div>
                        <div className='w-1/5 flex justify-center items-center'>
                            <div className='text font-bold text-red-500'>
                                500.000 Đ
                            </div>
                            <del className='ml-3 text font-bold'>
                                600.000 Đ
                            </del>
                        </div>
                        <div className='w-1/5 flex justify-center items-center'>
                            <div className='bg-[#b9b4c7] w-8 rounded-sm'>
                                -
                            </div>
                            <div>
                                <input type="number" value='1' className='w-10 text-center pl-2'/>
                            </div>
                            <div className='bg-[#b9b4c7] w-8 rounded-sm'>
                                +
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-center items-center'>
                            <div className='text font-bold text-red-500 mr-20'>
                                500.000 Đ
                            </div>
                        </div>
                        <div className='text-3xl absolute right-10'>
                            <AiFillCloseCircle/>
                        </div>
                    </div>
               </div>
            </div>

            <div className='w-5/6 h-auto m-auto mt-4'>
                <div className='flex items-center'>
                    <div className='text-5xl'>
                        <GiReceiveMoney/>
                    </div>
                    <div className='ml-3 text-xl text font-medium'>Tổng Thanh Toán: <span className='text font-bold text-red-500'>500.000 Đ</span></div>
                    <div className='bg-[#f74877] w-24 h-7 text-white rounded-md flex items-center justify-center ml-3'>
                        Đặt hàng
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Cart;