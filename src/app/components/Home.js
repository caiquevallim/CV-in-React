
/**
 * Created by Caique on 04/07/2017.
 */
import React from 'react';
import {render} from 'react-dom';

import {Perfil} from './Perfil';
import {Qualification} from './Qualification';
import {Education} from './Education';
import {Experience} from './Experience';


class Home extends React.Component{
    render(){
        return(
            <div className="row">
                <Perfil/>
                <hr/>
                <Qualification/>
                <hr/>
                <Education/>
                <hr/>
                <Experience/>
            </div>
        );
    }
}


export default Home;