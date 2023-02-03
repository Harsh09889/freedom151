const initialState = {
	email: "",
	token: "",
	isAuth: false,
};

export function AuthReducer(state = initialState, { type, payload }) {
	switch (type) {
		case "LOGIN_SUCCESS":
			return payload;
		default:
			return state;
	}
}
