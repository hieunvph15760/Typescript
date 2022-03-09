import React from 'react';
import '../../App.css';
function Table(){
    const students = [
        {
            name:"Nguyễn Văn Hiếu",
            age:21,
            phone: 12345678910,
            image:"https://th.bing.com/th/id/OIP.Pa-48c6uXhOt0_DLY84RFgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        },
        {
            name:"Nguyễn Văn Huy",
            age:21,
            phone: 12345678910,
            image:"https://th.bing.com/th/id/OIP.Pa-48c6uXhOt0_DLY84RFgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        },
        {
            name:"Nguyễn Văn Nam",
            age:21,
            phone: 12345678910,
            image:"https://th.bing.com/th/id/OIP.Pa-48c6uXhOt0_DLY84RFgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        },
        {
            name:"Nguyễn Văn Tuấn",
            age:21,
            phone: 12345678910,
            image:"https://th.bing.com/th/id/OIP.Pa-48c6uXhOt0_DLY84RFgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        },
        {
            name:"Nguyễn Văn Hoàng",
            age:21,
            phone: 12345678910,
            image:"https://th.bing.com/th/id/OIP.Pa-48c6uXhOt0_DLY84RFgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        },
    ];
    
    
    return (
        <table className="table">
            <thead className="thead">
                <tr className="tr">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                { students.map((item)=>(
                    <tr>
                        <td className="td">{item.name}</td>
                        <td className="td">{item.age}</td>
                        <td className="td">{item.phone}</td>
                        <td className="td"><img src={item.image} width="50px" alt=""/></td>
                        <td className="td"><button className="btn">Xóa</button></td>
                    </tr>))}

            </tbody>
        </table>
    )
}
export default Table;