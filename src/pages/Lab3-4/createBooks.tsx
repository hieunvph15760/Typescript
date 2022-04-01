import React, { useEffect, useState } from "react";
import { createBooks, getAllCategories } from "../../api/books";
import {SubmitHandler,useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
type TypeCategories = {
    id:string|string,
    name:string,
    price:number,
    categories:string
}


function CreateBooks(){

    const navigate = useNavigate();

    const [categories,setCategories] = useState<TypeCategories[]>([]);

    const {register,handleSubmit,formState:{errors}} = useForm<TypeCategories>();
    
    const onSubmit:SubmitHandler<TypeCategories> = async (data) =>{
        const response = await createBooks(data);
        if(response.status === 201){
            navigate('/books');
        }
    }


    useEffect(()=>{
        const handleCategories = async () =>{
            const {data} = await getAllCategories();
            setCategories(data);
        }
        handleCategories();
    },[])
    console.log(categories);
    return(
        <div className="m-auto">
           <h1>Thêm mới sách</h1>
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
               <p><button type="submit">Thêm</button></p>
           </form>
        </div>
    )

}

export default CreateBooks;