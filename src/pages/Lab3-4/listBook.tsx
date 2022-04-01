import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBooks,removeBook,getAllCategories } from "../../api/books";

type TypeCategories = {
    id:number|string,
    name:string,
    price:number,
    categories:string
}

function ListBooks (){

    const [books,setBooks] = useState<TypeCategories[]>([]);
    const [categories,setCategories] = useState<TypeCategories[]>([]);

    const handleBooks = async () =>{
        const response = await getAllBooks();
        setBooks(response.data);
    }

    const handleCategories = async () =>{
        const {data} = await getAllCategories();
        setCategories(data);
    }

    const onDelete = async (id:any) =>{
        const response = await removeBook(id);
        if(response.status === 201){
            handleBooks();
        }
    }

    useEffect(()=>{
        handleBooks();
        handleCategories();
    },[])

   

    return (
        <div>
            <h1><Link to={"/books/create"}>Thêm mới sách</Link></h1>
            <table className="m-auto">
               <thead>
                <tr>
                    <th>
                    Tên 
                    </th>
                    <th>
                    Giá
                    </th>
                    <th>
                    Danh mục
                    </th>
                    <th colSpan={2}>Chỉnh sửa</th>
                    </tr>
               </thead>
               <tbody>
                   {
                       books.map((item)=>(
                           <tr key={item.id}>
                               <td>{item.name}</td>
                               <td>{item.price}</td>
                                {
                                    categories.map((cate)=>(
                                        cate.id == item.categories ? <td key={cate.id}>{cate.name}</td> : null
                                    ))
                                }
                               <td><button onClick={()=> onDelete(item.id)}>Xóa</button></td>
                               <td><button><Link to={`/books/edit/${item.id}`}>Sửa</Link></button></td>
                           </tr>
                       ))
                   }
               </tbody>
            </table>
        </div>
    );
}

export default ListBooks;