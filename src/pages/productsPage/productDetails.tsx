
import React,{useState,useEffect} from 'react';
import { getProduct } from '../../api/products';
import {useParams} from 'react-router-dom';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';

type ProductType = {
    _id:string,
    name:string,
    image:string,
    sale:number,
    price:number,
    description:string,
    category:string
}

function ProductDetail() {
    const[products,setProducts] = useState<ProductType>();
    const {_id} = useParams();
    
    const cart = [];
    if(localStorage.getItem("cart")){
        cart.push(JSON.parse(localStorage.getItem('cart') || ''));
        console.log(cart);
        
    }

    const handleProducts = async()=>{
        const response = await getProduct(_id);
        setProducts(response.data);
    }

    const handleCart = (id:string|undefined) =>{
        console.log(id);
    }

    useEffect(()=>{
        handleProducts();
    },[])

    return (
        <React.Fragment>
        <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto">
                <div style={{borderBottom: '1px solid #ededed'}} className='flex pb-2 text font-medium'>
                    Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Chi tiết sản phẩm
                </div>
                <div className="flex mt-3 w-full">
                    <div className="w-2/4">
                        <img src={products?.image} alt="" />
                    </div>
                    <div className="w-2/4 mt-20 flex flex-col items-start">
                        <div className='text-4xl text font-medium'>{products?.name}</div>
                        <div className="mt-3 text">{products?.description}</div>
                        <div className="mt-3 text-red-500 font-bold text">{products?.price} ₫</div>
                        <div className="mt-3 flex">
                            <div className='text'>
                                Số lượng: <input style={{border:'1px solid gray'}} value='1' type="number" className='w-24 rounded-sm h-8 text-center pl-3'/>
                            </div>
                            <div onClick={()=> handleCart(products?._id)} style={{border:'1px solid gray'}} className="px-4 text  rounded-sm border-none bg-red-500 text-white ml-2 h-8 flex justify-center items-center">
                                Thêm vào giỏ hảng
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-auto mt-10'>
            <div className='m-auto w-5/6 h-auto'>
                <div className='w-full flex items-center'>
                    <div className='text-[#b9b4c7] font-medium text-2xl'>Có Thể Bạn Sẽ Thích</div> <div className='ml-2 text-3xl text-red-500'><AiFillHeart/></div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default ProductDetail;