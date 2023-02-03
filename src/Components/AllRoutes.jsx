import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import UserPage from "../Pages/User/Index";
import AdminPage from "../Pages/Admin/Index";
import Login from "./admin/Login";
import Data from "./admin/Data";
import Reports from "./admin/Reports";

const AllRoutes = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>

				<Route
					path='/user'
					element={<UserPage />}
				/>

				<Route
					path='/admin'
					element={<AdminPage />}
				/>
				<Route
					path='/admin/login'
					element={<Login />}
				/>
				<Route
					path='/admin/data'
					element={<Data />}
				/>
				<Route
					path='/admin/report'
					element={<Reports />}
				/>

				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
