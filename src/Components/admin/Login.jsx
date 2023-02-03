import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Auth/authActions";

const Login = () => {
	const [loginState, setLoginState] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();

	const isAuth = useSelector((state) => state.auth.isAuth);

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate("/admin/data");
		}
	}, [isAuth]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(loginState));
	};
	return (
		<div>
			<form
				className='flex flex-col gap-4 max-w-xs mx-auto mt-10'
				onSubmit={handleSubmit}>
				<input
					type='email'
					required
					placeholder='Enter Email'
					name='email'
					value={loginState.email}
					onChange={(e) =>
						setLoginState((p) => ({ ...p, [e.target.name]: e.target.value }))
					}
				/>
				<input
					type='password'
					required
					placeholder='Enter Password'
					name='password'
					value={loginState.password}
					onChange={(e) =>
						setLoginState((p) => ({ ...p, [e.target.name]: e.target.value }))
					}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Login;
