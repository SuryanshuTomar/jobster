import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { useDashboardContext } from "../hooks/useDashboardContext";
import { Links } from "../utils/Links";

interface NavLinksProps {
	isBigSidebar?: boolean;
}

const NavLinks: FC<NavLinksProps> = ({ isBigSidebar }) => {
	const { toggleSidebar } = useDashboardContext();

	return (
		<div className="nav-links">
			{Links.map((link) => {
				const { text, path, icon } = link;

				return (
					<NavLink
						to={path}
						key={text}
						onClick={isBigSidebar ? undefined : toggleSidebar}
						className={"nav-link"}
						end
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};
export default NavLinks;
