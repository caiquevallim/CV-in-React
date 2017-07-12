/**
 * Created by Caique on 06/07/2017.
 */
const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME_FULFILLED":// fulfilled has been used to when I need a promisse in my dispatch(userActions)
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};
export default userReducer;