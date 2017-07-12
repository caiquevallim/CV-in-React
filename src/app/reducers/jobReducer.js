/**
 * Created by Caique on 06/07/2017.
 */
export default function reducer(state={
    map:{
        lat: -21.2237365,
        lng: -50.4153141
    },
    fetching:null,
    fetched:null,
    error:null
}, action) {

    switch (action.type){
        case "FETCH_MAP":{
            return{
                ...state, fetching:true
            }
        }
        case "FETCH_MAP_REJECTED":{
            return{
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_MAP_FULFILLED":{
            return{
                ...state,
                fetching:false,
                fetched:true,
                map:action.payload
            }
        }
        case "SET_MAP_LAT":{
            return{
                ...state,
                map:{
                    ...state.map,
                    lat: action.payload
                }
            }
        }
        case "SET_MAP_LNG":{
            return{
                ...state,
                map:{
                    ...state.map,
                    lng: action.payload
                }
            }
        }

    }
    return state;
}