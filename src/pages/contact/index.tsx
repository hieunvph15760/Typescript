
import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillGoogleCircle,AiFillInstagram } from 'react-icons/ai';
import googleMap from '../../img/googleMap.jpg';
import {useForm,SubmitHandler} from 'react-hook-form';
import { create } from '../../api/contact';

type Type = {
    name:String,
    email:String,
    content:String
}

function Contact() {

    const{register,handleSubmit,formState:{errors}} = useForm<Type>();

    const onSubmit:SubmitHandler<Type> = async(data) =>{
        create(data);
    }

    return (
        <React.Fragment>
        <div className="w-full h-auto">
            <div className="w-5/6 m-auto bg-red-500 h-auto">
                <div className='w-full h-80'>
                    <img src={googleMap} alt="" />
                </div>
            </div>
            <div className="w-5/6 m-auto h-auto flex justify-between mt-32">
                <div className='w-2/5 h-auto'>
                    <div className='w-full flex justify-start text font-bold text-2xl'>
                        LIÊN HỆ CHÚNG TÔI
                    </div>
                    <div className='w-full flex justify-start text text-left mt-8 text-[#515050]'>
                        Có nhiều cách để liên hệ với chúng tôi. Bạn có thể gửi cho chúng tôi một dòng, gọi cho chúng tôi hoặc gửi email, chọn những gì phù hợp với bạn nhất.
                    </div>
                    <div className='w-full text text-left mt-8 text-[#515050]'>
                        <p>(800 686-6688)</p>
                        <p>Clothingstore@gmail.com</p>
                    </div>
                    <div className='w-full flex flex-col items-start text text-left mt-8 text-[#515050]'>
                        <p>Giờ Mở Cửa: 8:00 - 18:00 Thứ hai - Thứ Sáu</p>
                        <p>Chủ Nhật: Đóng cửa</p>
                    </div>
                    <div className='w-full flex flex-col items-start text text-left mt-8'>
                        <div className='text font-bold text-2xl'>THEO DÕI CHÚNG TÔI</div>
                        <div className='flex w-56 justify-around mt-3'>
                            <div className='w-9 bg-blue-500 rounded-full h-9 flex items-center justify-center'><div className='text-white'><BsFacebook/></div></div>
                            <div className='w-9 bg-blue-400 rounded-full h-9 flex items-center justify-center'><div className='text-white'><AiFillTwitterCircle/></div></div>
                            <div className='w-9 bg-red-500 rounded-full h-9 flex items-center justify-center'><div className='text-white'><AiFillGoogleCircle/></div></div>
                            <div className='w-9 bg-amber-900 rounded-full h-9 flex items-center justify-center'><div className='text-white'><AiFillInstagram/></div></div>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 h-auto'>
                    <div className='w-full flex justify-start text font-bold text-2xl'>
                        HÃY GỬI TIN NHẮN CHO CHÚNG TÔI !
                    </div>
                    <div className='w-full flex justify-start text text-left mt-8 text-[#515050]'>
                       Điền vào biểu mẫu dưới đây để nhận miễn phí và bảo mật.
                    </div>
                    <div className='w-full mt-3'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p><input style={{border:'1px solid #ededed'}} type="text" className='w-full py-3 pl-3 rounded-sm outline-none' placeholder='Tên' {...register('name',{required:true})}/></p>
                            <p className="text-red-500 text-left">{errors.name && "Không được để trống Tên!"}</p>
                            <p><input style={{border:'1px solid #ededed'}} type="text" className='w-full py-3 pl-3 rounded-sm outline-none mt-3' placeholder='Email' {...register('email',{required:true})}/></p>
                            <p className="text-red-500 text-left">{errors.email && "Không được để trống Email !"}</p>
                            <p><textarea style={{border:'1px solid #ededed'}} className='w-full py-3 pl-3 rounded-sm outline-none mt-3' placeholder='Nội dung' {...register('content',{required:true})}></textarea></p>
                            <p className="text-red-500 text-left">{errors.content && "Không được để trống Nội Dung!"}</p>
                            <p><button className='mt-5 text font-bold float-left bg-black text-white p-3 rounded-md'>GỬI TIN NHẮN</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Contact;