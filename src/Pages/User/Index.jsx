import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REACT_APP_BACKEND_URL } from "../../config/constants/URLs";

/**
 *  1. Name
    2. Age
    3. Gender (Radio buttons)
    4. Country 
    5. Profession (dropdown - Student, Employed)
 */

const UserPage = () => {
	const [formState, setFormState] = useState({
		name: "",
		age: "",
		gender: "",
		country: "",
		profession: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));
	};

	const handleSub = async (e) => {
		e.preventDefault();
		e;
		const URL = REACT_APP_BACKEND_URL;
		const { data } = await axios.post(URL + "/users", formState);

		alert(URL);
		navigate("/");
	};
	return (
		<div>
			<form
				className='border flex flex-col p-4 gap-4'
				onSubmit={handleSub}>
				<input
					required
					type='text'
					placeholder='Enter Your Name'
					name='name'
					value={formState.name}
					onChange={handleChange}
				/>
				<input
					required
					type='number'
					placeholder='Enter Your Age'
					name='age'
					value={formState.age}
					onChange={handleChange}
				/>
				<div className='radioWrapper flex gap-2'>
					<div className='inputGrp flex gap-2'>
						<input
							checked
							name='gender'
							type='radio'
							id='male'
							value={"male"}
							onChange={handleChange}
						/>
						<label htmlFor='male'>Male</label>
					</div>
					<div className='inputGrp flex gap-2'>
						<input
							name='gender'
							type='radio'
							id='female'
							value={"female"}
							onChange={handleChange}
						/>
						<label htmlFor='female'>Female</label>
					</div>
					<div className='inputGrp flex gap-2'>
						<input
							name='gender'
							type='radio'
							id='others'
							value={"others"}
							onChange={handleChange}
						/>
						<label htmlFor='others'>Others</label>
					</div>
				</div>
				<select
					name='country'
					onChange={handleChange}
					id='country'>
					<option value=''>Select Country</option>
					<option value='india'>India</option>
					<option value='bharat'>Bharat</option>
				</select>
				<select
					name='profession'
					onChange={handleChange}
					id='profession'>
					<option value=''>Select your Professional Status</option>
					<option value='student'>Student</option>
					<option value='employed'>Employed</option>
				</select>
				<input
					type='submit'
					value={"Submit"}
				/>
			</form>
		</div>
	);
};

export default UserPage;
