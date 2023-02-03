import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className='flex gap-4'>
			<Link to={"/user"}>
				<button>User</button>
			</Link>
			<Link to={"/admin"}>
				<button>Admin</button>
			</Link>
		</div>
	);
};

export default HomePage;
