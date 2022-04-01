import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeCategorie,getAllCategories } from "../../api/books";

type TypeCategories = {
    id:number|string,
    name:string,
    price:number,
    categories:string
}

function ListCategories (){

    const [categories,setCategories] = useState<TypeCategories[]>([]);

    const handleCategories = async () =>{
        const {data} = await getAllCategories();
        setCategories(data);
    }

    const onDelete = async (id:any) =>{
        const response = await removeCategorie(id);
        if(response.status === 201){
            handleCategories();
        }
    }

    useEffect(()=>{
        handleCategories();
    },[])
   

    return (
        <div>
            <h1><Link to={"/categories/create"}>Thêm mới danh mục</Link></h1>
            <table className="m-auto">
               <thead>
                <tr>
                    <th>
                    Tên 
                    </th>
                    <th colSpan={2}>Chỉnh sửa</th>
                    </tr>
               </thead>
               <tbody>
                   {
                       categories.map((item)=>(
                           <tr key={item.id}>
                               <td>{item.name}</td>
                               <td><button onClick={()=> onDelete(item.id)}>Xóa</button></td>
                               <td><button><Link to={`/categories/edit/${item.id}`}>Sửa</Link></button></td>
                           </tr>
                       ))
                   }
               </tbody>
            </table>
        </div>
    );
}

export default ListCategories;