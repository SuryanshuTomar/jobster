import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import {
	HomeLayout,
	Register,
	Login,
	DashboardLayout,
	Error,
	Landing,
	AddJob,
	Stats,
	AllJobs,
	Profile,
} from "./pages";

export const router = createBrowserRouter([
	{
		path: "/", // forward slash means domain(home route)
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <HomeLayout />,
				children: [
					{
						index: true,
						element: <Landing />,
					},
					{
						path: "register",
						element: <Register />,
					},
					{
						path: "login",
						element: <Login />,
					},
					{
						path: "dashboard",
						element: <DashboardLayout />,
						children: [
							{
								index: true,
								element: <AddJob />,
							},
							{
								path: "stats",
								element: <Stats />,
							}, 
							{
								path: "all-jobs",
								element: <AllJobs />,
							},
							{
								path: "profile",
								element: <Profile />,
							},
						],
					},
				],
			},
		],
	},
]);
