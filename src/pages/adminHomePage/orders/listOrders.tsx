import React,{useState, useEffect} from "react";
import { getOrders } from "../../../api/order";
import {Link} from "react-router-dom";
type Type = {
    _id:string,
    name:string,
    email:number,
    lastname:string,
    address:string,
    phone:string,
    note:string
}

function ListOrders(){

    const[orders,setOrders] = useState<Type[]>([]);
    
    const handleOrders = async()=>{
        const response = await getOrders();
        setOrders(response.data);
    }

    useEffect(()=>{
        handleOrders();
    },[])
    return (
       <React.Fragment>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Họ
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Note
              </th>
            </tr>
          </thead>
          {orders.map((item) => (
                <tbody className="bg-white divide-y divide-gray-200">
        <tr key={item._id}>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.name}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.lastname}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.email}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.address}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.phone}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.note}</div>
          </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
          <div className="bg-red-500 w-32 text-white h-6 flex justify-center cursor-pointer items-cente rounded-sm">
            <Link to={`/admin/orders/${item._id}`}>Chi tiết đơn hàng</Link>
          </div>
        </td>
        </tr>
      </tbody>
            ))}
        </table>
        </div>
    </div>
    </div>
    </div>
    </div>
      </div>
        </main>
       </React.Fragment>
    )
}
export default ListOrders;