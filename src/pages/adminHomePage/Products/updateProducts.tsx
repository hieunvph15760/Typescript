import React,{useState,useEffect} from "react";
import {useParams ,useNavigate, Link} from 'react-router-dom';
import { getProduct, update } from "../../../api/products";
import {SubmitHandler,useForm} from 'react-hook-form';
import { getCategoris } from "../../../api/categoris";

type Type = {
    _id:string,
    name:string,
    price:string|number,
    sale:number,
    image:string,
    category:string,
    description:string  
}

function UpdateProducts () {

    const nagigate = useNavigate();

    const {id} = useParams();    
    
    const [categories,setCategories] = useState<Type[]>([]);

    const {handleSubmit,register,formState:{errors},reset} = useForm<Type>();

    useEffect(()=>{
        const handleProduct =  async() =>{
            const {data} = await getProduct(id);
            reset(data);
        }
        const handleCategories = async () =>{
            const {data} = await getCategoris();
            setCategories(data);
        }
        handleProduct();
        handleCategories();
    },[]);

    const onSubmit:SubmitHandler<Type> = async (data:any) =>{
        const response = await update(data,id);
            if(response.status === 200){
                nagigate('/admin/ProductsAdmin');
        }
    }
    return (

        <React.Fragment>
        <header className="bg-white shadow">
         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
         <div className="lg:flex lg:items-center lg:justify-between">
         <div className="flex-1 min-w-0 flex justify-start">
             <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Sửa sản phẩm
             </h2>
         </div>
         <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <Link to={'/admin/productsAdmin'} className="sm:ml-3">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Quay lại
        </button>
            </Link>
             <span className="ml-3 relative sm:hidden">
         <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
           More
           <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
         </button>
       </span>
         </div>
     </div>
         </div>
     </header>
         <form className="ml-6 my-10 mb-20" onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3 flex flex-col">
         <label htmlFor="exampleInputEmail1"  className="flex justify-start">Tên</label>
             <input type="text" className="p-2 rounded-md mt-2" style={{border:'1px solid #b9b4c7'}} {...register('name',{required:true})} />
             <span className="text-red-500 flex justify-start">{errors.name && "Bạn chưa nhập tên !"}</span>
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Giá</label>
             <input type="text" className="p-2 rounded-md mt-2" style={{border:'1px solid #b9b4c7'}}  {...register('price',{required:true})} />
             <span className="text-red-500 flex justify-start">{errors.price && "Bạn chưa nhập giá !"}</span>
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Sale</label>
             <input type="text" className="p-2 rounded-md mt-2" style={{border:'1px solid #b9b4c7'}}  {...register('sale',{required:true})} />
             <span className="text-red-500 flex justify-start">{errors.sale && "Bạn chưa nhập sale !"}</span>
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Ảnh</label>
             <input type="text" className="p-2 rounded-md mt-2" style={{border:'1px solid #b9b4c7'}}  {...register('image',{required:true})} />
             <span className="text-red-500 flex justify-start">{errors.image && "Bạn chưa nhập ảnh !"}</span>
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Mô tả</label>
             <input type="text" className="p-2 rounded-md mt-2" style={{border:'1px solid #b9b4c7'}} {...register('description',{required:true})}/>
             <span className="text-red-500 flex justify-start">{errors.description && "Bạn chưa nhập mô tả !"}</span>
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Danh mục sản phẩm</label>
             <select {...register('category')} className="p-2 rounded-md mt-2" style={{border:'1px solid #b9b4c7'}}>
                 {
                     categories.map((item)=>(
                         <option key={item._id} value={item._id}>{item.name}</option>
                     ))
                 }
             </select>
         </div>
         <button type="submit" className="float-left text-white btn btn-primary bg-[#0d6efd] w-20 py-1 rounded-md">Sửa</button>
     </form>
        </React.Fragment>

    );
}

export default UpdateProducts;