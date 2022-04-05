import React from "react";
import {Outlet} from 'react-router-dom';
import AdminHomePage from '../adminHomePage';
import Footer from '../adminHomePage/footer'
type PropsType = {}

function AdminLayout(props:PropsType){
    return (
        <React.Fragment>
            <AdminHomePage/>
                <main>
                    <Outlet />
                </main>
                <Footer/>
        </React.Fragment>
    )
}
export default AdminLayout;