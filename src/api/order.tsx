import axios from "./axios";

export const addOrder = (data:any) =>{
    return axios.post("/orders",data);
}
export const getOrders = () =>{
    return axios.get("/orders");
}
export const getOrder = (id:string|undefined) =>{
    return axios.get(`/orders/${id}`);
}