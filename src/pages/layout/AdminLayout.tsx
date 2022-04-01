import React from "react";
import {Outlet} from 'react-router-dom';
import AdminHomePage from '../adminHomePage';
type PropsType = {}

function AdminLayout(props:PropsType){
    return (
        <React.Fragment>
            <AdminHomePage/>
                <main>
                    <Outlet />
                </main>
        </React.Fragment>
    )
}
export default AdminLayout;