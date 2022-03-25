
import React,{useState,useEffect} from 'react';
import { getProduct } from '../../api/products';
import {useParams} from 'react-router-dom';

type ProductType = {
    _id:number|string,
    name:string,
    price:number|string,
    category:string
}

function ProductDetail() {
    const[products,setProducts] = useState<ProductType>();
    const {_id} = useParams();
    console.log(_id);
    
    const handleProducts = async()=>{
        const response = await getProduct(_id);
        setProducts(response.data);
    }

    useEffect(()=>{
        handleProducts();
    },[])

    return (
        <div>
            Product Detail component
            <p>ID:{products?._id}</p>
            <p>Name:{products?.name}</p>
            <p>Price:{products?.price}</p>
        </div>
    );
}

export default ProductDetail;