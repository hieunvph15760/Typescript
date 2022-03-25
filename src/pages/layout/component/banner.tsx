import React from "react";
import banner from "../../../img/banner.jpg";

function Banner(){
    return (
        <React.Fragment>
            <div className="w-full h-auto bg-[#1e1e27]">
                <div className="w-full h-96">
                    <img className="w-full h-full" src={banner} alt="" />
                </div>
            </div>
            <div className="w-full h-auto my-16">
                <div className="text-white w-5/6 m-auto h-auto">
                    <div className="m-auto text-black text-4xl font-medium">SẢN PHẨM</div>
                    <div className="bg-red-500 w-36 h-1 m-auto mt-2"></div>
                    <div className="w-72 text-black h-auto m-auto mt-7 flex">
                        <div style={{border:'1px solid gray'}} className="bg-red-500 font-medium text-white w-36 h-10 flex items-center justify-center">
                            TẤT CẢ
                        </div>
                        <div style={{border:'1px solid gray'}} className="w-36 font-medium h-10 flex items-center justify-center">
                            NAM
                        </div>
                        <div style={{border:'1px solid gray'}} className="w-36 font-medium h-10 flex items-center justify-center">
                            NỮ
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;