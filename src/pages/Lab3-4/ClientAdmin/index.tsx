import React from "react";
import { Outlet } from "react-router-dom";

function ClientAdmin(){
    return (
        <div>
            <div>Header</div>
            <main>
                <Outlet />
            </main>
            <div>Footer</div>
        </div>
    );
}

export default ClientAdmin;