import React,{useState, useEffect} from 'react';
import { getProducts, searchProduct, sortProducts } from '../../api/products';
import {Link,useNavigate} from'react-router-dom';
import {FaArrowAltCircleRight,FaSearch} from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';


type ProductType = {
    _id:string,
    name:string,
    price:number,
    sale:number,
    image:string,
    category:string,
    description:string 
}

function ProductList() {
    
    const [input,inputValue] = useState<string>('');

    const[searchName,setNameValue] = useState<ProductType[]>([]);

    const[products,setProducts] = useState<ProductType[]>([]);

    const [options,setOption] = useState<string>("");
    const [sort,setSort] = useState<ProductType[]>([]);

    const handleProducts = async()=>{
        const response = await getProducts();
        setProducts(response.data);
    }

    const handleSort = async() =>{
        const {data} = await sortProducts(options);
        setSort(data);
        setProducts([]);
        setNameValue([]);
    }

    const handleSearch = async () =>{
        const {data} = await searchProduct(input);
        setNameValue(data);
        setProducts([]);
        setSort([]);
    }   

    useEffect(()=>{

        if(!input){
            handleProducts();
            handleSort();
        }else{
            handleSearch();
        }
       
    },[input,options]);

    return (
        <React.Fragment>
         <div className="w-full h-auto">
            <div className="text-black w-5/6 m-auto h-auto mb-7">
                <div style={{borderBottom: '1px solid #ededed'}} className='flex pb-2 text font-medium justify-between'>
                        <div className='flex'>
                            Trang chủ <div className="mt-1 mx-2"><FaArrowAltCircleRight/></div> Tất cả sản phẩm
                            <div className='ml-5'>
                                <select onChange={(event)=>setOption(event.target.value)} className='w-40 p-1 rounded-sm bg-[#e5e7eb]'>
                                    <option>Giá</option>
                                    <option value="-price">Từ Cao Đến Thấp</option>
                                    <option value="price">Từ Thấp Đến Cao</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-base mt-1 flex">Tìm kiếm sản phẩm...<label htmlFor="searchInput" className='ml-2 text-xl'><FaSearch/></label></div>
                        <input type="checkbox" name="" id="searchInput" hidden/>
                        <div className="fixed top-0 left-0 right-0  w-full h-full flex items-center" id="search">
                            <div className=" absolute right-10 top-10 text-5xl close">
                                <label htmlFor="searchInput"><AiFillCloseCircle/></label>
                            </div>
                            <form style={{width:'600px'}} className="m-auto h-auto">
                                <input type="text" placeholder="Tìm kiếm..." style={{width:'80%'}} className='py-3 rounded-lg pl-4 focus:outline-none' onChange={(event)=>inputValue(event.target.value)}/>
                            </form>
                        </div>
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

            {/* Search */}
            <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                {
                     searchName.map((item)=>(
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

            {/* Sort */}
            <div className="text-white w-5/6 m-auto auto flex justify-between flex-wrap">
                {
                     sort.map((item)=>(
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