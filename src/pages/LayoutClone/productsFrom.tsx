import React, { useState } from "react";
import { createProductClone } from "../../api/products";
import {useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';

type Type = {
    name:string,
    price:string,
    description:string,
    category:string
}

function ProductFrom(){

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            name:'',
            price:'',
            description:'',
            category:''
        }
    });
    
    const onSubmit:SubmitHandler<Type> = async (data)=>{
        const response = await createProductClone(data);

        if(response.status === 200){
            navigate('/products');
        }
    }

    return (
        <div>
            <h1>Thêm mới sản phẩm</h1>
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

export default ProductFrom;