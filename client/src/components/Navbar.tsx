import { FaAlignLeft } from "react-icons/fa";

import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "../context/DashboardContext";

import { Logo } from ".";

const Navbar = () => {
	const { toggleSidebar } = useDashboardContext();

	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" onClick={toggleSidebar} className="toggle-btn">
					<FaAlignLeft />
				</button>
				<div className="">
					<Logo />
					<h4 className="logo-text">Dashboard</h4>
				</div>

				<div className="btn-container">toggle/logout</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
