import axios from "./axios";

if(localStorage.getItem('user')){
    var users = JSON.parse(localStorage.getItem('user') || '');
}

export const getCategoris = () =>{
    return axios.get('/categories');
}

export const getCategory = (id:string|undefined) =>{
    return axios.get(`/categories/${id}`)
}

export const remove = (id:string) =>{
    return axios.delete(`/categories/${id}/${users.user._id}`,{
        headers:{
            "Authorization":`Bearer ${users.token}`
        }
    })
}

export const update = (id:string|undefined,data:any) =>{
    return axios.put(`/categories/${id}/${users.user._id}`,data,{
        headers:{
            "Authorization": `Bearer ${users.token}`
        }
    })
}

export const create = (data:any) =>{
    return axios.post(`/categories/${users.user._id}`,data,{
        headers: {
            "Authorization":`Bearer ${users.token}`
        }
    });
}

