import React,{useState, useEffect} from 'react';
import { getProducts } from '../../api/products';
import {Link} from'react-router-dom';
import {FaArrowAltCircleRight} from 'react-icons/fa';


type ProductType = {
    _id:string|number,
    name:string,
    image:string,
    sale:number,
    price:number,
    category:string
}
function ProductList() {
    const[products,setProducts] = useState<ProductType[]>([]);

    const handleProducts = async()=>{
        const response = await getProducts();
        setProducts(response.data);
    }

    console.log(products);
    

    useEffect(()=>{
        handleProducts();
    },[])

    return (
        <React.Fragment>
         <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto mb-7">
                <div style={{borderBottom: '1px solid #ededed'}} className='flex pb-2 text font-medium'>
                        Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Tất cả sản phẩm
                </div>
           </div>
            <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                {
                     products.map((item)=>(
                        <div className="h-auto w-64 text-center mb-5  rounded-sm productsHover" key={item._id}>
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
                        </div>
                    ))
                }
            </div>
        </div>
    </React.Fragment>
    );
}

export default ProductList;