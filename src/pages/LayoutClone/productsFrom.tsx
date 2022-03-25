import React, { useState } from "react";
import { createProduct } from "../../api/products";
import {useNavigate} from 'react-router-dom';

function ProductFrom(){

    const navigate = useNavigate();

    const[nameValue, setNameValue] = useState<string>('');
    const[priceValue, setPriceValue] = useState<string>('');
    const[descriptionValue, setDescriptionValue] = useState<string>('');
    const[categoryValue, setCategoryValue] = useState<string>('');

    const [messages,setMessages] = useState<string[]>([]);

    const onValidate = (data:{name:string, price:number, description:string, category:string})=>{
        const validateMessages = [];
        
        if(!data.name){
            validateMessages.push('Tên không được để trống !');
        }else if(data.name.length < 6){
            validateMessages.push('Tên không được nhỏ hơn 6 ký tự !');
        }
        
        if(!data.price){
            validateMessages.push('Giá không được để trống !');
        }

        if(!data.description){
            validateMessages.push('Mô tả không được để trống !');
        }

        if(!data.category){
            validateMessages.push('Danh mục không được để trống !');
        }

        return validateMessages;
    }

    const handlSubmit = async ()=>{
        const submitData = {
            name:nameValue,
            price:+priceValue,
            description:descriptionValue,
            category:categoryValue
        }

        const validate = onValidate(submitData);

        if(validate.length === 0){
            messages.length && setMessages([]);

            const response = await createProduct(submitData);

            if(response.status === 200){
                navigate('/products');
            }
        }else{
            setMessages(validate);
        }

        console.log(submitData);
        
    }

    return (
        <div>
            <h1>Thêm mới sản phẩm</h1>
            <div>
                <form>
                    <p>
                        <label htmlFor="name">ProductName</label>
                        <input style={{border:'1px solid gray'}} type="text" id="name" onChange={(event)=>setNameValue(event.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="price">Price</label>
                        <input style={{border:'1px solid gray'}} type="number" id="price" onChange={(event)=>setPriceValue(event.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="description">description</label>
                        <input style={{border:'1px solid gray'}} type="text" id="description" onChange={(event)=>setDescriptionValue(event.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="category">category</label>
                        <input style={{border:'1px solid gray'}} type="text" id="category" onChange={(event)=>setCategoryValue(event.target.value)} />
                    </p>
                    <p>
                        <button onClick={()=> handlSubmit()} type="button">Submit</button>
                    </p>
                </form>
            </div>
            {
                messages.length > 0 ? <ul>
                    {messages.map((message,index)=>(
                        <li key={index}>{message}</li>
                    ))}
                </ul> : null
            }
        </div>
    )
};

export default ProductFrom;