/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash';

class Map extends React.Component{
    map = null;
    infoWindow = null;
    constructor(props){
        super(props);
        this.state = {
            center: props.onCenter,
            companiesInfo: props.getCompaniesInfo()
        }
    }
    createMap(){
        let mapConfig = {
            center: this.state.center,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        let style = {width:'953px', heigth:'512px'};
        let mapDiv = document.getElementById('map');
        //mapDiv.style.width = style.width;
        mapDiv.style.height = style.heigth;
        this.map = new google.maps.Map(mapDiv, mapConfig);
        this.infoWindow = new google.maps.InfoWindow();


    }
    setMapCenter(center){
        if(!this.map)
            return;
        this.map.setCenter(center);
    }
    loadMap(){
        this.loadMarkers();

    }
    loadMarkers(){
        let dateFormat = "DD-MM-YYYY";
        _(this.state.companiesInfo).forEach((company)=>{
            company.marker.setMap(this.map);
            const markerClick = ()=>{
                google.maps.event.addListenerOnce(this.map, 'idle', function(){
                    let elements = document.getElementsByClassName('gm-style-iw');
                    if(!elements)
                        return;
                    _(elements).forEach((element)=>{
                        element.previousSibling.parentElement.style.backgroundColor="rgba(0,0,0,0.80)";
                        element.previousSibling.parentElement.style.opacity="0.80";
                    });
                });
                let contentString =
                    `<div class="card card-md">
                    <div class="card-header">
                        <img className="img-responsive" src=${company.logo} alt=${company.name}/>
                    </div>
                    <p><h4>Company: <small> ${company.name}</small></h4></p>
                    <p><h4>Position: <small>${company.job.name}</small></h4></p>
                    <p><h4>Start Date: <small>${company.job.startDate.format(dateFormat)}</small></h4></p>
                    <p><h4>End Date: <small>${(company.job.isActive) ?`Current job`:`${company.job.endDate.format(dateFormat)}`}</small></h4></p>
                    
                </div>
                `;
                this.infoWindow.setContent(contentString);
                this.infoWindow.open(this.map, company.marker);
            };
            company.marker.addListener('click', markerClick);
        } );
    }
    componentWillReceiveProps(nextProps){
        this.setState({
           center: nextProps.onCenter
        });
    }
    componentDidUpdate(prevState, props){
        this.setMapCenter(this.state.center);
    }
    componentDidMount(){
        if(!this.map)
            this.createMap();
        this.loadMap();
    }
    render(){
        return(
            <div id="map">


            </div>
        );
    }
}

export default Map;