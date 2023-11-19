import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    console.log("login started...")
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch(err) {
        console.log(err);
        dispatch(loginFailure());
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());

    console.log("register started...")
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch(err) {
        console.log(err);
        dispatch(loginFailure());
    }
}
