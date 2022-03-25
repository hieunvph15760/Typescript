import React,{useState, useEffect} from 'react';
import { getProducts } from '../../api/products';
import {Link} from'react-router-dom';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import img_product from "../../img/product_3.png";

type ProductType = {
    _id:number|string,
    name:string,
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
                <div style={{borderBottom: '1px solid gray'}} className='flex pb-2'>
                        Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Tất cả sản phẩm
                </div>
           </div>
            <div className="text-white w-5/6 m-auto auto flex justify-between">
                {
                    products.map((item)=>(
                        <div style={{border:"1px solid gray"}} className="h-auto w-64 text-center" key={item._id}>
                            <div>
                                <img src={img_product} alt="" />
                            </div>
                            <div className="flex text-black w-full justify-center">
                                <div className="mr-2 text-red-500 font-medium">
                                    {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(item.price)}
                                </div>
                                <div className="">
                                    <del>7.000.000 ₫</del>
                                </div>
                            </div>
                            <div className="text-black pb-3 font-medium">
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