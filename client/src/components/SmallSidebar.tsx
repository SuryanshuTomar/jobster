import { FaTimes } from "react-icons/fa";

import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../context/DashboardContext";

import { Logo } from ".";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext();

	return (
		<Wrapper>
			<div
				className={`sidebar-container ${showSidebar ? "show-sidebar" : ""}`}
			>
				<div className="content">
					<button
						type="button"
						onClick={toggleSidebar}
						className="close-btn"
					>
						<FaTimes />
					</button>

					<header>
						<Logo />
					</header>

					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
};
export default SmallSidebar;
