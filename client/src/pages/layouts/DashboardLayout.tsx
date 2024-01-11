import { Outlet } from "react-router-dom";

import Wrapper from "../../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { DashboardContextProvider } from "../../context/DashboardContext";

const DashboardLayout = () => {
	return (
		<DashboardContextProvider>
			<Wrapper>
				<main className="dashboard">
					<SmallSidebar />
					<BigSidebar />

					<div>
						<Navbar />
						<div className="dashboard-page">
							<Outlet />
						</div>
					</div>
				</main>
			</Wrapper>
		</DashboardContextProvider>
	);
};
export default DashboardLayout;
