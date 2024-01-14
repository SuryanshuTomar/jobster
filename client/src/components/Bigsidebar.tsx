import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../hooks/useDashboardContext";

import NavLinks from "./NavLinks";

import { Logo } from ".";

const Bigsidebar = () => {
	const { showSidebar } = useDashboardContext();

	return (
		<Wrapper>
			<div
				className={`sidebar-container ${showSidebar ? "show-sidebar" : ""}`}
			>
				<div className="content">
					<header>
						<Logo />
					</header>
				</div>

				<NavLinks isBigSidebar />
			</div>
		</Wrapper>
	);
};

export default Bigsidebar;
