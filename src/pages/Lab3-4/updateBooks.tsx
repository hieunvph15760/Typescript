import React, { useEffect, useState } from "react";
import { updateBook, getAllCategories, getBook } from "../../api/books";
import {SubmitHandler,useForm} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
type TypeCategories = {
    id:string|number,
    name:string,
    price:number,
    categories:string
}


function UpdateBooks(){

    const navigate = useNavigate();
    const {id} = useParams();
    
    const [categories,setCategories] = useState<TypeCategories[]>([]);

    const {register,handleSubmit,formState:{errors},reset} = useForm<TypeCategories>();
    

    const onSubmit:SubmitHandler<TypeCategories> = async (data) =>{
        const response = await updateBook(id,data);
        if(response.status === 200){
            navigate('/books');
        }
    }

    useEffect(()=>{
        const handleBook = async () =>{
            const {data} = await getBook(id);
            reset(data);
        }
        const handleCategories = async () =>{
            const {data} = await getAllCategories();
            setCategories(data);
        }
        handleBook();
        handleCategories();
    },[])


    return(
        <div className="m-auto">
           <h1>Sửa sách</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
               <p>Tên <input type="text" style={{border:'1px solid gray'}} {...register('name',{required:true})}/></p>
               <span style={{color:'red'}}>{errors.name && "Bạn chưa nhập tên !"}</span>
               <p>Giá <input type="text" style={{border:'1px solid gray'}} {...register('price',{required:true})} /></p>
               <span style={{color:'red'}}>{errors.price && "Bạn chưa nhập giá !"}</span>
               <p>
                   Danh mục 
                    <select {...register('categories',{required:true})}>
                        {
                            categories.map((item)=>(
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
               </p>
               <span style={{color:'red'}}>{errors.categories && "Bạn chưa chọn danh mục !"}</span>
               <p><button type="submit">Sửa</button></p>
           </form>
        </div>
    )

}

export default UpdateBooks;