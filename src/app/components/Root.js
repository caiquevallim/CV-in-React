/*
* Created by Caique on 04/07/2017.
*/
import React from 'react';
import {Header} from './Header';

class Root extends React.Component{
    render(){
        return(
            <div className="container" style={{padding:"80px 30px 30px 30px", backgroundColor:"rgba(201, 201, 201, 0.08)"}}>
                <div className="row">
                    <div className="col-xs-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
export default Root;