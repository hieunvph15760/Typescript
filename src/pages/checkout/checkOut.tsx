import React from 'react';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {useForm,SubmitHandler} from "react-hook-form";
import { addOrder } from '../../api/order';
import { addOrderDetails } from '../../api/orderDetails';

type ProductType = {
    _id:string,
    name:string,
    price:number,
    description:string,
    category:string,
    sale:number,
    image:string,
    quantity:number,
    lastname:string,
    address:string,
    phone:string,
    email:string,
    note:string,
    total:number
}

function CheckOut() {

    // Cart
    let cart:any = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart") || "");
        }

    // Sum
    let sum:number = 0;
    let result:number = 0;

    const {register,handleSubmit,formState:{errors}} = useForm<ProductType>();
    const orderDetais:any = []
    
    //Lấy total từ localStorage
    const total = JSON.parse(localStorage.getItem('total')||"");
    console.log(total);
    
    // Them vao orderDetails
    cart.map((item:ProductType)=>(
        orderDetais.push({
            name:item.name,
            image:item.image,
            price:item.price,
            quantity:item.quantity,
            sale:item.sale,
            total: total
        })
    ))
    
    const onSubmit:SubmitHandler<ProductType> = async(data:any) =>{
        const response = await addOrder(data);
        orderDetais.map((item:ProductType)=>(
            addOrderDetails({ 
                name:item.name,
                image:item.image,
                price:item.price,
                quantity:item.quantity,
                sale:item.sale,
                total: item.total,
                order:response.data._id
            })
        ))
        localStorage.removeItem('cart');
    }
    
    
    return (
        <React.Fragment>
        <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto">
                <div style={{borderBottom: '1px solid #ededed'}} className='flex pb-2 text font-medium'>
                    Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Chi tiết thanh toán
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-5/6 m-auto h-auto flex justify-between mt-10'>
                    <div className='w-8/12'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Tên</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' {...register('name')} style={{border:'1px solid #ededed'}} />
                            </div>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Họ</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' {...register('lastname')} style={{border:'1px solid #ededed'}} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-full mt-3'>
                            <p className='mb-2'>Địa chỉ</p>
                            <input type="text" className='w-full h-10 rounded-sm outline-none' {...register('address')}  style={{border:'1px solid #ededed'}} />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Điện thoại</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' {...register('phone')} style={{border:'1px solid #ededed'}} />
                            </div>
                            <div className='flex flex-col items-start' style={{width:'48%'}}>
                                <p className='mb-2'>Email</p>
                                <input type="text" className='w-full h-10 rounded-sm outline-none' {...register('email')} style={{border:'1px solid #ededed'}} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-full mt-3'>
                            <p className='mb-2'>Ghi chú</p>
                            <textarea className='w-full h-10 rounded-sm outline-none' {...register('note')} style={{border:'1px solid #ededed'}} />
                        </div>
                    </div>
               
    
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
                            <div key={item._id} className='w-56 m-auto text-left mt-3 flex justify-between'>
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
                        
                        <button className='w-56 m-auto mb-5 bg-[#f74877] font-bold text-xl rounded-sm mt-10 h-14 cursor-pointer flex items-center justify-center text-white'>
                                Mua Hàng
                        </button>
                </div>
            </form>
        </div>
        </React.Fragment>
    );
}

export default CheckOut;