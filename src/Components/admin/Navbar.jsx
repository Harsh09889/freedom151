import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='bg-white sticky top-0 w-full flex justify-center py-2'>
			<div className='flex gap-4 w-fit'>
				<Link to={"/admin/login"}>
					<button>Login</button>
				</Link>
				<Link to={"/admin/data"}>
					<button>Data</button>
				</Link>
				<Link to={"/admin/report"}>
					<button>Reports</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
