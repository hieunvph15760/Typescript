import React,{useState,useEffect} from "react";
import { getProducts } from "../../api/products";
import { getCategoris, getCategory } from "../../api/categoris";
import {Link} from "react-router-dom";
import Banner from "../layout/banner";
import BannerBottom from "../layout/bannerBottom";
import post1 from "../../img/post1.jpg";
import post2 from "../../img/post2.jpg";
import post3 from "../../img/post3.jpg";

type ProductType = {
    _id:string,
    name:string,
    image:string,
    sale:number,
    price:number,
    category:string
}

function Homepage(){

    // Danh mục
    const [categories,setCategories] = useState<ProductType[]>([]);

    // Sản phẩm
    const[products,setProducts] = useState<ProductType[]>([]);

    // Sản phẩm theo danh mục
    const[category,setCategory] = useState<ProductType[]>([]);

    const clickCategory = async (id:any) =>{
        const {data} = await getCategory(id);
        setCategory(data.products);
        setProducts([]);
    }
    
    // Show lại sản phẩm khi Click All
    const showProducts = async () =>{
        const responsive = await getProducts();
        setProducts(responsive.data);
        setCategory([])
    }
    
    useEffect(()=>{
        // Sản phẩm
        const handleProducts = async ()=>{
            const responsive = await getProducts();
            setProducts(responsive.data);
        }
        // Danh mục
        const handleCategories = async () =>{
            const {data} = await getCategoris();
            setCategories(data);
        }

        handleCategories();
        handleProducts();
        
    },[])


    return (
        <React.Fragment>
            <Banner/>
            <div className="w-full h-auto my-16">
                <div className="text-white w-5/6 m-auto h-auto">
                    <div className="m-auto text-black text-4xl font-semibold title">SẢN PHẨM</div>
                    <div className="bg-red-500 w-36 h-1 m-auto mt-2 mb-3"></div>
                    <div className="text-black h-auto m-auto mt-7 cursor-pointer flex" style={{width:'500px'}}>
                        <div onClick={()=>showProducts()} style={{border:'1px solid gray',borderTopLeftRadius:'8px'}} className="text bg-red-500 text font-bold text-white w-36 h-10 flex items-center justify-center">
                            TẤT CẢ
                        </div>
                        {categories.map((item) =>(
                             <div onClick={()=> clickCategory(item._id)} key={item._id} style={{border:'1px solid gray'}} className="text w-36 font-bold h-10 flex items-center justify-center">
                                 {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-auto">
                <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                    {/* Products */}
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

                    {/* Categories */}
                    {
                        category.map((item)=>(
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
            <BannerBottom />
            <div className="w-full h-auto mt-12 mb-20">
                <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                    <div style={{width:'32%'}} className="h-96 text-center mb-5 rounded-md">
                        <div className="h-full">
                            <img src={post1} className='w-full h-full' alt="" />
                        </div>
                        <div className="text-black mt-4 text font-bold">
                           <Link to={''}> 8 Cách Sửa Lỗi Màn Hình Cuộc Gọi Đến Không Hiển Thị Trên iPhone</Link>
                        </div>
                    </div>
                    <div style={{width:'32%'}} className="h-96 text-center mb-5 rounded-md">
                        <div className="h-full">
                            <img src={post2} className='w-full h-full' alt="" />
                        </div>
                        <div className="text-black mt-4 text font-bold">
                            <Link to={''}>Cách Khôi Phục Story Đã Xóa Trên Facebook, Instagram</Link>
                        </div>
                    </div>
                    <div style={{width:'32%'}} className="h-96 text-center mb-5 rounded-md">
                        <div className="h-full">
                            <img src={post3} className='w-full h-full' alt="" />
                        </div>
                        <div className="text-black mt-4 text font-bold">
                           <Link to={''}> 9 Cách Lỗi Khắc Phục Safari Không Phát Video Trên iPhone</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Homepage;