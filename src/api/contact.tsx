import axios from './axios';

export const get = () =>{
    return axios.get('/contact');
}

export const removeContact = (id:string|undefined) =>{
    return axios.delete(`/contact/${id}`)
}

export const create = (data:any) =>{
    return axios.post("/contact/",data);
}