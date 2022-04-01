import React, { useEffect, useState } from "react";
import { updateProductClone, getProduct } from "../../api/products";
import {useNavigate, useParams} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';

type Type = {
    name:string,
    price:string,
    description:string,
    category:string
}

function ProductFromUpdate(){

    const {_id} = useParams();
    
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        defaultValues:{
            name:'',
            price:'',
            description:'',
            category:''
        }
    });

    const handleGetProduct = async (id:string) =>{
        const response = await getProduct(id);
        if(response.status === 200){
            reset(response.data);
        }
    }

    useEffect(()=>{
        if(_id){
            handleGetProduct(_id);
        }
    },[_id])
    
    const onSubmit:SubmitHandler<Type> = (data:any)=>{
        updateProductClone(_id,data);
    }

    return (
        <div>
            <h1>Sửa sản phẩm</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <label htmlFor="name">ProductName</label>
                        <input style={{border:'1px solid gray'}} type="text" {...register('name',{required:true})} />
                    </p>
                    <p>
                        <label htmlFor="price">Price</label>
                        <input style={{border:'1px solid gray'}} type="text" {...register('price',{required:true})}  />
                    </p>
                    <p>
                        <label htmlFor="description">description</label>
                        <input style={{border:'1px solid gray'}} type="text" {...register('description',{required:true})} />
                    </p>
                    <p>
                        <label htmlFor="category">category</label>
                        <input style={{border:'1px solid gray'}} type="text" {...register('category',{required:true})}  />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default ProductFromUpdate;