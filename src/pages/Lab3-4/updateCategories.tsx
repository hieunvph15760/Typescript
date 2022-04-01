import React, { useEffect } from "react";
import { updateCategorie , getCategory } from "../../api/books";
import {SubmitHandler,useForm} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
type TypeCategories = {
    id:string|number,
    name:string,
    price:number,
    categories:string
}


function UpdateCategories(){

    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    
    const {register,handleSubmit,formState:{errors},reset} = useForm<TypeCategories>();
    

    const onSubmit:SubmitHandler<TypeCategories> = async (data) =>{
        const response = await updateCategorie(id,data);
        if(response.status === 200){
            navigate('/categories');
        }
    }

    useEffect(()=>{
        const handleCategories = async () =>{
            const {data} = await getCategory(id);
            reset(data);
        }
        handleCategories();
    },[])


    return(
        <div className="m-auto">
           <h1>Sửa Cateogies</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
               <p>Tên <input type="text" style={{border:'1px solid gray'}} {...register('name',{required:true})}/></p>
               <span style={{color:'red'}}>{errors.name && "Bạn chưa nhập tên !"}</span>
               <p><button type="submit">Sửa</button></p>
           </form>
        </div>
    )

}

export default UpdateCategories;