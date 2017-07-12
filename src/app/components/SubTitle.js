/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class SubTitle extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <h3>{this.props.subTitle}:</h3>
                </div>
            </div>

        );
    }
}
SubTitle.propTypes = {
    subTitle: PropTypes.string,
};

export default SubTitle;