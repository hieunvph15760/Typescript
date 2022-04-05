import axios from "./axios";

export const addOrder = (data:any) =>{
    return axios.post("/orders",data);
}