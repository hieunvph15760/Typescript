import React from "react";
import banner from "../../img/banner.png";

function Banner(){
    return (
        <React.Fragment>
            <div className="w-full h-auto bg-[#1e1e27]">
                <div className="w-full" style={{height:'500px'}}>
                    <img className="w-full h-full" src={banner} alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;