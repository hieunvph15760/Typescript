import instance from "./axios";

export const getProducts = () =>{
    return instance.get('/products');
};

export const getProduct = (id:number|string|undefined) =>{
    return instance.get(`/products/${id}`);
};

export const createProduct = (data:any)=>{
    return instance.post('/products',data);
}

export const deleteProduct = (id:string)=>{
    return instance.delete(`/products/${id}`);
}