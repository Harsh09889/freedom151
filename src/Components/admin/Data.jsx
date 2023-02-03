import axios from "axios";
import React, { useEffect, useState } from "react";
import { REACT_APP_BACKEND_URL } from "../../config/constants/URLs";

const Data = () => {
	const [data, setData] = useState([]);
	const [country, setCountry] = useState("");
	const [gender, setGender] = useState("");
	const [name, setName] = useState("");

	useEffect(() => {
		if (name) {
			(async () => {
				const { data } = await axios.get(
					REACT_APP_BACKEND_URL +
						`/users?${country ? `&country=${country}` : ""}${
							gender ? `&gender=${gender}` : ""
						}`
				);
				setData(data);
			})();

			setData((prevData) =>
				prevData.filter((val) => {
					let reg = new RegExp(name, "i");
					return val.name.match(reg);
				})
			);
		} else {
			(async () => {
				const { data } = await axios.get(
					REACT_APP_BACKEND_URL +
						`/users?${country ? `&country=${country}` : ""}${
							gender ? `&gender=${gender}` : ""
						}`
				);
				setData(data);
			})();
		}
	}, [name]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				REACT_APP_BACKEND_URL +
					`/users?${country ? `&country=${country}` : ""}${
						gender ? `&gender=${gender}` : ""
					}`
			);
			setData(data);
		})();
	}, []);
	return (
		<div>
			<div>
				<input
					type='text'
					placeholder='Search'
					onChange={(e) => setName(e.target.value)}
				/>
				<div className='radioWrapper flex gap-2'>
					<div className='inputGrp flex gap-2'>
						<input
							name='gender'
							type='radio'
							id='male'
							value={"male"}
							onChange={(e) => e.target.checked && setGender("male")}
						/>
						<label htmlFor='male'>Male</label>
					</div>
					<div className='inputGrp flex gap-2'>
						<input
							name='gender'
							type='radio'
							id='female'
							value={"female"}
							onChange={(e) => e.target.checked && setGender("female")}
						/>
						<label htmlFor='female'>Female</label>
					</div>
					<div className='inputGrp flex gap-2'>
						<input
							name='gender'
							type='radio'
							id='others'
							value={"others"}
							onChange={(e) => e.target.checked && setGender("others")}
						/>
						<label htmlFor='others'>Others</label>
					</div>
				</div>
				<select
					name='country'
					onChange={(e) => setCountry(e.target.value)}
					id='country'>
					<option value=''>Select Country</option>
					<option value='india'>India</option>
					<option value='bharat'>Bharat</option>
				</select>
			</div>

			<div className='grid grid-cols-4 gap-4'>
				{data.map((elem) => (
					<div className='border'>
						<h2>{elem.name}</h2>
						<img
							src='https://source.unsplash.com/featured/300x201'
							alt=''
						/>
						<p>Age : {elem.age}</p>
						<p>Gender : {elem.gender}</p>
						<p>Country : {elem.country}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Data;
