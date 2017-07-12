/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import {render} from 'react-dom';

import Company from './Company';

import { setMapLat } from "../actions/jobActions"
import { setMapLng } from "../actions/jobActions"

class ContainerCard extends React.Component{
    setMapCenter(center){
        this.props.dispatch(setMapLat(center.lat));
        this.props.dispatch(setMapLng(center.lng));
    }
    render(){
        const mappedJobs = this.props.getCompaniesInfo().map((companyInfo, key) =>
            <div className="col-md-4" key={key}>
                <Company onClick={this.setMapCenter.bind(this,companyInfo.coordinates)} company={companyInfo}/>
            </div>
        );
        return(
            <div className="row">
                {mappedJobs}
            </div>

        );
    }
}

export default ContainerCard;