import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getUsers, remove } from "../../../api/users";

type userType = {
    _id:string,
    name:string,
    email:string,
    password:string,
    role:string | number
}

function ListUsers(){

    const[users,setUsers] = useState<userType[]>([]);

    const handleUsers = async () =>{
      const {data} = await getUsers();
      setUsers(data);
    }

    useEffect(()=>{
      
        handleUsers();
    },[])

    const handleRemove = async (_id:string) =>{
        const choose = window.confirm("Bạn có muốn xóa không ?");
        if(choose){
            const response = await remove(_id);
            if(response.status === 200){
              handleUsers();
            }
        }
    }

    return (
        <React.Fragment>
         <main>
             <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                 <div className="px-4 py-6 sm:px-0">
                     <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
     <div className="flex flex-col">
     <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
         <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
           <p className="float-right my-2 mr-32 flex items-center justify-center py-4 h-5 w-44 bg-red-500 text-white rounded-md"><Link to={'/admin/users/create'}>Thêm người dùng</Link></p>
             <table className="min-w-full divide-y divide-gray-200">
             <thead className="bg-gray-50">
                 <tr>
               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Id
               </th>
               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Tên
               </th>
             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Email
             </th>
             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Mật khẩu
             </th>
             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Vai trò
             </th>
             <th></th>
             <th></th>
             </tr>
           </thead>
           {users.map((item) => (
                 <tbody className="bg-white divide-y divide-gray-200">
         <tr key={item._id}>
           <td className="whitespace-nowrap">
             <div className="flex items-center">
                 {item._id}
             </div>
           </td>
           <td className="whitespace-nowrap">
             <div className="text-sm text-gray-900">{item.name}</div>
           </td>
           <td className="whitespace-nowrap">
             <div className="text-sm text-gray-900">{item.email}</div>
           </td>
           <td className="whitespace-nowrap">
             <div className="text-sm text-gray-900">{item.password}</div>
           </td>
           <td className="whitespace-nowrap">
             <div className="text-sm text-gray-900">{item.role}</div>
           </td>
           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
           <div className="bg-red-500 w-12 h-6 flex justify-center items-cente rounded-sm">
           <p className="text-white">Sửa</p>
           </div>
           </td>
           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
           <div className="bg-red-500 w-12 h-6 flex justify-center cursor-pointer items-cente rounded-sm">
           <p onClick={()=>handleRemove(item._id)} className="text-white btnDelete">Xóa</p>
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
             </div>
         </main>
        </React.Fragment>
     )
}

export default ListUsers;