import instance from "./axios";

if(localStorage.getItem('user')){
    var users = JSON.parse(localStorage.getItem('user') || '');
}

export const getProducts = () =>{
    return instance.get('/products');
};

export const getProduct = (id:number|string|undefined) =>{
    return instance.get(`/products/${id}`);
};

export const createProduct = (data:any)=>{
    return instance.post(`/products/${users.user._id}`,data,{
        headers:{
            "Authorization":`Bearer ${users.token}`
        }
    });
}

export const deleteProduct = (id:string)=>{
    return instance.delete(`/products/${id}/${users.user._id}`,{
        headers:{
            "Authorization": `Bearer ${users.token}`
        }
    });
}

export const update = (data:any,id:string|undefined) => {
    return instance.put(`/products/${id}/${users.user._id}`,data,{
        headers:{
            "Authorization":`Bearer ${users.token}`
        }
    });
}

export const searchProduct = (data:any) =>{
    return instance.get(`/productsSearch?q=${data}`)
}

export const sortProducts = (data:any) =>{
    return instance.get(`/productsSort?sort=${data}`);
}
