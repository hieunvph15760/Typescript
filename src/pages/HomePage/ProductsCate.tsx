import React from "react";

function ProductsCate(prop:any){
    console.log(prop.name);
    return (
        <div className="text-red-500">{prop.name}</div>
    )
}

export default ProductsCate;