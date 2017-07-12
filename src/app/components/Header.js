/**
 * Created by Caique on 04/07/2017.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = (props)=> {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink to={"/"} activeClassName="active">Home</NavLink></li>
                        <li><NavLink to={"/map"} activeClassName="active">Map</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};