import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {getProducts, deleteProduct} from '../../../api/products';
type ProductType = {
    _id:string,
    name:string,
    price:number,
    image:string,
    sale:number,
    category:string
}

function ListProductsAdmin(){

    const[products,setProducts] = useState<ProductType[]>([]);
    
    const handleProducts = async()=>{
        const response = await getProducts();
        setProducts(response.data);
    }

    const handlDelete = async (_id:string) =>{
      const choose = window.confirm("Bạn có muốn xóa không ?");
      if(choose){
        const response = await deleteProduct(_id);
          if(response.status === 200){
             handleProducts();
          }
      }
    }
  
    useEffect(()=>{
        handleProducts();
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
          <p className="my-2 mr-2 flex items-center justify-center py-4 h-5 w-44 bg-red-500 text-white rounded-md"><Link to={'/admin/productsAdmin/create'}>Thêm mới sản phẩm</Link></p>
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sale
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ảnh
              </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Danh mục
            </th>
            <th></th>
            <th></th>
            </tr>
          </thead>
          {products.map((item) => (
                <tbody className="bg-white divide-y divide-gray-200">
        <tr key={item._id}>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.name}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.price}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.sale}</div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900 "><img src={item.image} className="w-12" alt=""  /></div>
          </td>
          <td className="whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.category}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className="bg-red-500 w-12 h-6 flex justify-center items-cente rounded-sm">
          <p  className="text-white"><Link to={`/admin/productsAdmin/edit/${item._id}`}>Sửa</Link></p>
          </div>
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
export default ListProductsAdmin;