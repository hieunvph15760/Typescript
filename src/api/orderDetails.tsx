import axios from "./axios";

export const addOrderDetails = (data:any) =>{
    return axios.post('/orderDetails',data);
}