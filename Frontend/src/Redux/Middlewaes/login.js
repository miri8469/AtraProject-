import { $CombinedState } from "redux";
import { actionsUser } from "../Actions/UserActions";

export const login = ({ dispatch, getState }) => next => action => {
    if (action.type === "LOGIN") {
        debugger
        fetch('http://localhost:5000/users/users')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    return next(action);
}
