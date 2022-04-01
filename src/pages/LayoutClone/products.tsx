import React,{useState, useEffect} from 'react';
import { deleteProduct, getProducts } from '../../api/products';
import {Link} from'react-router-dom';
import { StringLiteralLike } from 'typescript';

type ProductType = {
    _id:string,
    name:string,
    price:number,
    category:string
}
function ProductList() {
    const[products,setProducts] = useState<ProductType[]>([]);

    const handleProducts = async()=>{
        const response = await getProducts();
        setProducts(response.data);
    }

    const onDelete = async (_id:string) =>{
        const response = await deleteProduct(_id);
        console.log(response);
        if(response.status === 200){
            handleProducts();
        }
    }

    console.log(products);
    

    useEffect(()=>{
        handleProducts();
    },[])

    return (
        <div>
            <div>
                <Link to={"/products/create"}><button>Thêm mới sản phẩm</button></Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item=>(
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link to={`/products/${item._id}`}><button>Detail</button></Link></td>  
                                <td> <Link to={`/products/edit/${item._id}`}><button>Edit</button></Link></td>
                                <td><button onClick={()=> onDelete(item._id)}>Delete</button></td>
                             </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;