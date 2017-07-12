/**
 * Created by Caique on 06/07/2017.
 */
export function fetchMap() {
    return {
        type:"FETCH_MAP_FULFILLED",
        payload: {lat:-21.2204359,lng:-50.4110294}
    };

}
export function setMapLat(lat) {
    return {
        type: "SET_MAP_LAT",
        payload: lat
    };

}
export function setMapLng(lng) {
    return {
        type: "SET_MAP_LNG",
        payload: lng
    };

}