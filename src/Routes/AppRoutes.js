import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Container from "../components/Container";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function AppRoutes() {
    const basePath = window.location.origin
    console.log(basePath + "/wishlist/fashion")
    return(

            <Routes>
                <Route exact path={basePath + "/wishlist/fashion"} element={<Container/>}/>
            </Routes>


    )
}
export default AppRoutes