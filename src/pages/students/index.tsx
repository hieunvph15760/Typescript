import React, { useState } from 'react';

type row = any;

type cell = {
    label:string,
    key:string
}    

type TableProps = {
    rows: row[],
    headCells: cell[]
}
function Table({rows, headCells}:TableProps){

const [nameStudent,setNameStudent] = useState<string>("");
const [age,setAgeStudent] = useState<string>("");
const [address,setAddressStudent] = useState<string>("");
const [phone,setPhoneStudent] = useState<string>("");
const [student,setStudent] = useState([{}])

  const addStudent = () =>{
    rows.push({
        name:nameStudent,
        age:age,
        address:address,
        phone:phone,
    })
    console.log(rows);
    setStudent(rows);
  }
    return (
        <>
                <form action="">
          <p>
            <input type="text" placeholder='Name' onChange={(event)=> setNameStudent(event.target.value)} />
          </p>
          <p>
            <input type="text" placeholder='Age'  onChange={(event)=> setAgeStudent(event.target.value)} />
          </p> 
          <p>
            <input type="text" placeholder='Address' onChange={(event)=> setAddressStudent(event.target.value)} />
          </p> 
          <p>
            <input type="text" placeholder='Phone' onChange={(event)=> setPhoneStudent(event.target.value)}/>
          </p>
          <button type='button' onClick={()=> addStudent()}>Thêm sinh viên</button>
      </form>
            <table>
            <thead>
               <tr>
                   {
                       headCells.map((head,index)=>(
                           <th key={index}>{head.label}</th>
                       ))
                   }
               </tr>
            </thead>
            <tbody>
                {
                rows.map((row,index)=>(
                    <tr key={index}>
                        {
                            headCells.map((head,index)=>(
                                <td key={index}>{row[head.key]}</td>
                            ))
                        }
                    </tr>
                ))
                }
            </tbody>
        </table>

        </>
    )
}
export default Table;