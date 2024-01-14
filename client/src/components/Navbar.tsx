import { FaAlignLeft } from "react-icons/fa";

import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "../hooks/useDashboardContext";

import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

import { Logo } from ".";

const Navbar = () => {
	const { toggleSidebar } = useDashboardContext();

	return (
		<Wrapper>
			<div className="nav-center">
				<button
					type="button"
					onClick={toggleSidebar}
					className="toggle-btn"
				>
					<FaAlignLeft />
				</button>
				<div className="">
					<Logo />
					<h4 className="logo-text">Dashboard</h4>
				</div>

				<div className="btn-container">
					<ThemeToggle />
					<LogoutContainer />
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
