import { create } from "domain";
import React from "react";
import { SubmitHandler,useForm } from "react-hook-form";
import { createUser } from "../../../api/users";

type user = {
    name:string,
    email:string,
    password:string,
    role:string | number
}

function CreateUser(){

    const {register,handleSubmit} = useForm<user>();

    const onSubmit:SubmitHandler<user> = (data) =>{
        createUser(data);
    }

    return (
        <React.Fragment>
        <header className="bg-white shadow">
         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
         <div className="lg:flex lg:items-center lg:justify-between">
         <div className="flex-1 min-w-0 flex justify-start">
             <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Thêm mới người dùng
             </h2>
         </div>
         <div className="mt-5 flex lg:mt-0 lg:ml-4">
             <a href="/admin/category" className="sm:ml-3">
                 <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           Quay lại
         </button>
             </a>
             <span className="ml-3 relative sm:hidden">
         <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
           More
           <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
         </button>
       </span>
         </div>
     </div>
         </div>
     </header>
         <form className="ml-6 my-10" onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Tên</label>
             <input type="text" className="form-control" id="addCate_name" {...register('name')} />
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Email</label>
             <input type="text" className="form-control" id="addCate_name" {...register('email')} />
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Password</label>
             <input type="text" className="form-control" id="addCate_name" {...register('password')}/>
             <label htmlFor="exampleInputEmail1" className="form-label flex justify-start">Vai trò</label>
             <input type="text" className="form-control" id="addCate_name" {...register('role')}/>
         </div>
         <button type="submit" className="float-left btn btn-primary bg-[#0d6efd]">Thêm</button>
     </form>
        </React.Fragment>
     )
}

export default CreateUser;