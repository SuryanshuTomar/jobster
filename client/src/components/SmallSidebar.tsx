import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../context/DashboardContext";
import { Links } from "../utils/Links";

import { Logo } from ".";
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

					<div className="nav-links">
						{Links.map((link) => {
							const { text, path, icon } = link;

							return (
								<NavLink
									to={path}
									key={text}
									onClick={toggleSidebar}
									className={"nav-link"}
									end
								>
									<span className="icon">{icon}</span>
									{text}
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default SmallSidebar;
