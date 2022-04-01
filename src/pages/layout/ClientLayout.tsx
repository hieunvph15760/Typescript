import React from "react";
import Header from "./header";
import Footer from "./footer";
import {Outlet} from 'react-router-dom';
type PropsType = {}

function ClientLayout(props:PropsType){
    return (
        <div>
            <Header/>
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}
export default ClientLayout;