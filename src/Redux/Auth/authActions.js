import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../../config/constants/URLs";
const LOGIN = "LOGIN";

export function login(payload) {
	return async function (dispatch, getState) {
		const { data } = await axios.post("https://reqres.in/api/login", payload);
		dispatch({
			type: "LOGIN_SUCCESS",
			payload: { email: payload.email, token: data.token, isAuth: true },
		});
	};
}
