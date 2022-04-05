import React,{useState, useEffect} from "react";
import { get, removeContact } from "../../../api/contact";
type Type = {
    _id:string,
    name:string,
    email:number,
    content:string
}

function ListContact(){

    const[contact,setContact] = useState<Type[]>([]);
    
    const handleContact = async()=>{
        const response = await get();
        setContact(response.data);
    }

    const handlDelete = async (_id:string) =>{
      const users = JSON.parse(localStorage.getItem('user')|| '');
      const choose = window.confirm("Bạn có muốn xóa không ?");
      if(choose){
        if(users.user.role === 0){
          alert("Bạn không phải là admin !");
        }else{
          const response = await removeContact(_id);
          if(response.status === 200){
            handleContact();
          }
        }
      }
    }
  
    useEffect(()=>{
        handleContact();
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
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nội dung
              </th>
            </tr>
          </thead>
          {contact.map((item) => (
                <tbody className="bg-white divide-y divide-gray-200">
        <tr key={item._id}>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.name}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.email}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.content}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
          <div className="bg-red-500 w-12 h-6 flex justify-center cursor-pointer items-cente rounded-sm">
          <p onClick={()=> handlDelete(item._id)} className="text-white btnDelete">Xóa</p>
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
export default ListContact;