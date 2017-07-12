/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';

import {companiesInfo} from './../data/companyData';

import Map from './Map';
import ContainerCard from './ContainerCard';

import { fetchMap } from "../actions/jobActions"




@connect((store)=>{
    return{
        map:store.job.map
    };
})
class ContainerMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            map:{
                lat: props.map.lat,
                lng: props.map.lng,
            }

        };
    }
    componentWillMount(){
        this.props.dispatch(fetchMap());
    }
    render(){
        const {map} = this.props;
        return(
            <div className="row">
                <ContainerCard dispatch={this.props.dispatch} getCompaniesInfo={companiesInfo}/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-bordered">
                            <Map onCenter={map} getCompaniesInfo={companiesInfo}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default ContainerMap;