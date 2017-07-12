/**
 * Created by Caique on 07/07/2017.
 */
import moment from 'moment';

export function PlacesHasBeenWorked() {
    let placesHasBeenWorked = [];
    let eficazSistemas = {lat:-21.4187022, lng:-50.0848524};
    let softlineSistemas = {lat:-21.2106449,lng:-50.4258118};
    let solinftec = {lat:-21.2204359,lng:-50.4110294};

    function createMarker(local) {
        placesHasBeenWorked.push({marker: new google.maps.Marker({position: local})});
    }
    createMarker(eficazSistemas);
    createMarker(softlineSistemas);
    createMarker(solinftec);

    return placesHasBeenWorked;

}

export function companiesInfo() {
    let eficazSistemas = {lat:-21.4187022, lng:-50.0848524};
    let softlineSistemas = {lat:-21.2106449,lng:-50.4258118};
    let solinftec = {lat:-21.2204359,lng:-50.4110294};

    let dateFormat = "DD-MM-YYYY";

    let companiesInfo = [
        {
            id:3,
            name: "Solinftec - Automação Sem limites",
            logo:"/app/styles/img/logo_solinftec.png",
            city: "Araçatuba",
            state: {
                name:"São Paulo",
                sigla:"SP"
            },
            job:{
                name:"Full Stack Web Developer",
                moreInfo:"Teste de more info",
                isActive: true,
                startDate: moment("21/11/2016", dateFormat),
                endDate: new moment()
            },
            coordinates: solinftec,
            marker: new google.maps.Marker({position: solinftec})
        },
        {
            id:2,
            name: "Soft-Line Soluções em Sistemas",
            logo:"/app/styles/img/logo_softline.png",
            city: "Araçatuba",
            state: {
                name:"São Paulo",
                sigla:"SP"
            },
            job:{
                name:"Cobol Software Developer",
                moreInfo:"Teste de more info Cobol",
                isActive: false,
                startDate: moment("20/01/2015", dateFormat),
                endDate: moment("18/11/2016", dateFormat)
            },
            coordinates: softlineSistemas,
            marker: new google.maps.Marker({position: softlineSistemas})

        },
        {
            id:1,
            name: "Eficaz Sistemas",
            logo:"/app/styles/img/logo_eficaz.png",
            city: "Penápolis",
            state: {
                name:"São Paulo",
                sigla:"SP"
            },
            job:{
                name:"Delphi XE Software Developer",
                moreInfo:"Teste de more info Delphi",
                isActive: false,
                startDate: moment("17/03/2013", dateFormat),
                endDate: moment("09/01/2015", dateFormat)
            },
            coordinates: eficazSistemas,
            marker: new google.maps.Marker({position: eficazSistemas})

        }
    ];
    return companiesInfo;

}