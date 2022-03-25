import React from "react";
import Header from "./component/header";
import Banner from "./component/banner";
import Footer from "./component/footer";
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