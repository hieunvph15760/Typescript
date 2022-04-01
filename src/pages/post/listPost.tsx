import React,{useState,useEffect} from "react";
import { getProducts } from "../../api/products";
import {Link} from "react-router-dom";
import Banner from "../../img/banner.png";
import BannerBottom from "../../img/banner-bottom.jpg";
import product1 from "../../img/product_3.png";

type ProductType = {
    _id:string|number,
    name:string,
    price:number,
    category:string
}

function Postpage(){

    // const[products,setProducts] = useState<ProductType[]>([]);

    // const handleProducts = async ()=>{
    //     const responsive = await getProducts();
    //     setProducts(responsive.data);
    // }
    
    // console.log(products);
    
    // useEffect(()=>{
    //     handleProducts();
    // },[])

    return (
        <React.Fragment>
            <Banner/>
            <div className="w-full h-auto">
                <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                    <div style={{border:"1px solid gray"}} className="h-auto w-64 text-center mb-5 rounded-sm">
                        <div>
                            <img src={product1} alt="" />
                        </div>
                        <div className="flex text-black w-full justify-center">
                            <div className="mr-2 text-red-500 text font-bold">
                                {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(7000000)}
                            </div>
                            <div className="text font-bold">
                                <del>7.000.000 ₫</del>
                            </div>
                        </div>
                        <div className="text-black pb-3 text font-bold">
                            <Link to={``}>Iphone</Link>
                        </div>
                    </div>
                </div>
            </div>
            <BannerBottom />
        </React.Fragment>
    )
}
export default Postpage;