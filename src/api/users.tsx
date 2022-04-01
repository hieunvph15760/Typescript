import axios from './axios';

export const getUsers = () =>{
    return axios.get('/users')
}

export const createUser = (data:any) =>{
    return axios.post('/users/',data)
}

export const remove = (_id:string) =>{
    return axios.delete(`/users/${_id}`)
}