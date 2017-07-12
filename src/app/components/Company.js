/**
 * Created by Caique on 10/07/2017.
 */
import React from 'react';
import {render} from 'react-dom';

class Company extends React.Component{

    render(){

        return(
            <div className="card card-md card-inverse text-center" onClick={this.props.onClick}>
                <div className="card-header text-center">
                    <img className="img-responsive" src={this.props.company.logo} alt={this.props.company.name}/>
                </div>
                <hr/>
                <h4>{this.props.company.name}</h4>
                <p>{this.props.company.job.name}</p>
                <p><small>{this.props.company.city} - {this.props.company.state.sigla}</small></p>
            </div>

        );
    }
}

export default Company;