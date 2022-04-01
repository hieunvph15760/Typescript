import React from "react";
import bannerBottom from "../../img/banner-bottom.jpg";

function BannerBottom(){
    return (
        <React.Fragment>
            <div className="w-full h-auto bg-[#1e1e27]">
                <div className="w-full" style={{height:'500px'}}>
                    <img className="w-full h-full" src={bannerBottom} alt="" />
                </div>
            </div>
            <div className="w-full h-auto my-16">
                <div className="text-white w-5/6 m-auto h-auto">
                    <div className="m-auto text-black text-4xl font-semibold title">BÀI VIẾT</div>
                    <div className="bg-red-500 w-36 h-1 m-auto mt-2 mb-3"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BannerBottom;