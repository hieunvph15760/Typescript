import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { removeContact } from "../../../api/contact";
import { getOrder } from "../../../api/order";
type Type = {
    _id:string,
    name:string,
    email:number,
    lastname:string,
    address:string,
    phone:string,
    note:string,
    image:string,
    total:number,
    quantity:number,
    order:string,
    price:number,
    sale:number
}

function ListOrdersDetails(){

    const {id} = useParams();
    
    const[ordersDetails,setOrdersDetails] = useState<Type[]>([]);
    
    const handleOrdersDetails = async()=>{
        const response = await getOrder(id);
        setOrdersDetails(response.data.orderDetails);
    }

    // Sum
    let sum:number = 0;
    let result:number = 0;
  
    useEffect(()=>{
        handleOrdersDetails();
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
                Ảnh
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Số lượng
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tổng tiền
              </th>
            </tr>
          </thead>
          {ordersDetails.map((item) => (
                <tbody className="bg-white divide-y divide-gray-200">
        <tr key={item._id}>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.name}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900"><img src={item.image} className="w-20" alt="" /></div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900"> {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(item.price - (item.price * item.sale / 100))}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.quantity}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(sum = (item.price - (item.price * item.sale / 100)) * item.quantity)}</div>
          </td>
          <div className='hidden'>
              {
                  result += sum
              }
          </div>
        </tr>
      </tbody>
            ))}
        </table>
      <div className="flex justify-end mr-3 pb-3 text font-medium">
        THÀNH TIỀN: <div className="ml-3 text font-bold text-red-500">{new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(result)}</div>
      </div>
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
export default ListOrdersDetails;