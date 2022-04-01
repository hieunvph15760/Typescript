import React, { useEffect, useState } from "react";
import { createCategories } from "../../api/books";
import {SubmitHandler,useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
type TypeCategories = {
    id:string|string,
    name:string,
    price:number,
    categories:string
}


function CreateCategories(){

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm<TypeCategories>();
    
    const onSubmit:SubmitHandler<TypeCategories> = async (data) =>{
        const response = await createCategories(data);
        if(response.status === 201){
            navigate('/categories');
        }
    }

    return(
        <div className="m-auto">
           <h1>Thêm danh mục</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
               <p>Tên <input type="text" style={{border:'1px solid gray'}} {...register('name',{required:true})}/></p>
               <span style={{color:'red'}}>{errors.name && "Bạn chưa nhập tên !"}</span>
               <p><button type="submit">Thêm</button></p>
           </form>
        </div>
    )

}

export default CreateCategories;