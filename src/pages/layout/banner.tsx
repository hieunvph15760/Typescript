import React, { useEffect, useState } from "react";
import { getCategoris } from "../../api/categoris";
import banner from "../../img/banner.png";

type TypeCate = {
    _id:string,
    name:String
}

function Banner(){

    const [categories,setCategories] = useState<TypeCate[]>([]);

    useEffect(()=>{
        const handleCategories = async () =>{
            const {data} = await getCategoris();
            setCategories(data);
        }

        handleCategories();
    },[])

    return (
        <React.Fragment>
            <div className="w-full h-auto bg-[#1e1e27]">
                <div className="w-full" style={{height:'500px'}}>
                    <img className="w-full h-full" src={banner} alt="" />
                </div>
            </div>
            <div className="w-full h-auto my-16">
                <div className="text-white w-5/6 m-auto h-auto">
                    <div className="m-auto text-black text-4xl font-semibold title">SẢN PHẨM</div>
                    <div className="bg-red-500 w-36 h-1 m-auto mt-2 mb-3"></div>
                    <div className="text-black h-auto m-auto mt-7 flex" style={{width:'500px'}}>
                        <div style={{border:'1px solid gray',borderTopLeftRadius:'8px'}} className="text bg-red-500 text font-bold text-white w-36 h-10 flex items-center justify-center">
                            TẤT CẢ
                        </div>
                        {categories.map((item) =>(
                             <div key={item._id} style={{border:'1px solid gray'}} className="text w-36 font-bold h-10 flex items-center justify-center">
                                 {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;