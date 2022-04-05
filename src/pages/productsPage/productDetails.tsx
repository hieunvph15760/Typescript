
import React,{useState,useEffect} from 'react';
import { getProduct, getProducts } from '../../api/products';
import {Link, useParams} from 'react-router-dom';
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

    // Một sản phẩm
    const[products,setProducts] = useState<ProductType>();
    const {_id} = useParams();
    
    // Số lượng
    let [count,setCount] = useState<number>(1);

    // Tất cả sản phẩm
    const[allProducts,setGetAllProducts] = useState<ProductType[]>([]);


    const next = () =>{
        setCount(count += 1);
    }
    

    const prev = () =>{
        setCount(count -= 1);
    }
    

    // Một sản phẩm
    const handleProducts = async()=>{
        const response = await getProduct(_id);
        setProducts(response.data);
    }

    // Tất cả sản phẩm
    const handleAllProducts = async()=>{
        const response = await getProducts();
        setGetAllProducts(response.data);
    }

    let cart:any = [];
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart")|| "");
    }

    const handleCart = () =>{
        const addCart = {
            _id:products?._id,
            name: products?.name,
            price: products?.price,
            quantity:count,
            description:products?.description,
            category:products?.category,
            image:products?.image,
            sale:products?.sale
        }
        cart.push(addCart);
        localStorage.setItem('cart',JSON.stringify(cart));
    }

    useEffect(()=>{
        handleProducts();
        handleAllProducts();
    },[])

    console.log(products?.category);
    

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
                               <div className='mt-1 mr-2'>Số lượng:</div> 
                               <div className='flex'>
                                    <div className='w-10 h-8 bg-[#b9b4c7] rounded-md flex items-center justify-center' onClick={()=> next()}>+</div>
                                    <input style={{border:'1px solid gray'}} value={count} type="text" className='w-8 mx-3 rounded-sm h-8 pl-3'/>
                                    <div className='w-10 h-8 bg-[#b9b4c7] rounded-md flex items-center justify-center' onClick={()=> prev()}>-</div>
                               </div>
                            <div onClick={()=> handleCart()} style={{border:'1px solid gray'}} className="px-4 text  rounded-md border-none bg-red-500 text-white ml-2 h-8 flex justify-center items-center">
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

        <div className="w-full h-auto">
                <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                    {/* Sản phẩm liên quan */}
                    {
                        allProducts.map((item)=>(
                            item.category  === products?.category ? <div className="h-auto w-64 text-center mb-5  rounded-sm productsHover" key={item._id}>
                            {item.sale === 0 ? null : <div className="text-white z-30 text font-bold bg-red-500 w-14 absolute mt-20 ml-40 flex justify-center items-center h-10 rounded-full">- {item.sale} %</div> }
                            <div>
                                <img src={item.image} style={{width:'250px'}}  className="mt-14 mb-3" alt="" />
                            </div>
                            <div className="flex text-black w-full justify-center">
                                <div className="mr-2 text-red-500 text font-extrabold">
                                    {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(item.price - (item.price * item.sale / 100))}
                                </div>
                                <div className="text-[#b9b4c7] font-bold">
                                    {item.sale === 0 ? null : <del>{new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(item.price)}</del>}
                                </div>
                            </div>
                            <div className="text-black pb-3 text font-bold">
                                <Link to={`/products/${item._id}`}>{item.name}</Link>
                            </div>
                        </div> : null
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductDetail;