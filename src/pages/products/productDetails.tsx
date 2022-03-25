
import React,{useState,useEffect} from 'react';
import { getProduct } from '../../api/products';
import {useParams} from 'react-router-dom';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import img_product from "../../img/product_3.png";

type ProductType = {
    _id:number|string,
    name:string,
    price:number,
    description:string,
    category:string
}

function ProductDetail() {
    const[products,setProducts] = useState<ProductType>();
    const {_id} = useParams();
    console.log(_id);
    
    const handleProducts = async()=>{
        const response = await getProduct(_id);
        setProducts(response.data);
    }

    useEffect(()=>{
        handleProducts();
    },[])

    return (
        <React.Fragment>
        <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto">
                <div style={{borderBottom: '1px solid gray'}} className='flex pb-2'>
                    Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Chi tiết sản phẩm
                </div>
                <div className="flex mt-3 w-full">
                    <div className="w-2/4">
                        <img src={img_product} alt="" />
                    </div>
                    <div className="w-2/4 mt-20 flex flex-col items-start">
                        <div className='text-4xl font-medium'>{products?.name}</div>
                        <div className="mt-3">{products?.description}</div>
                        <div className="mt-3 text-red-500 font-medium">Giá mới: {products?.price} ₫</div>
                        <div className="mt-3 flex">
                            <div>
                                Số lượng: <input style={{border:'1px solid gray'}} value='1' type="number" className='w-24 rounded-sm h-8 text-center pl-3'/>
                            </div>
                            <div style={{border:'1px solid gray'}} className="px-4 rounded-sm bg-red-500 text-white ml-2 h-8 flex justify-center items-center">
                                Thêm vào giỏ hảng
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default ProductDetail;