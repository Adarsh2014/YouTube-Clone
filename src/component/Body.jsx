import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import WtachPage from "./WtachPage";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Body;
