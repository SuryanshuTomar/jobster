import { useState, type FC } from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";

import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboardContext } from "../context/DashboardContext";

interface LogoutContainerProps {}

const LogoutContainer: FC<LogoutContainerProps> = () => {
	const { user, logoutUser } = useDashboardContext();

	const [showLogout, setShowLogout] = useState(false);

	return (
		<Wrapper>
			<button
				type="button"
				onClick={() => setShowLogout(!showLogout)}
				className="btn logout-btn"
			>
				<FaUserCircle />
				{user?.name}
				<FaCaretDown />
			</button>

			<div className={`dropdown ${showLogout ? "show-dropdown" : ""}`}>
				<button type="button" onClick={logoutUser} className="dropdown-btn">
					logout
				</button>
			</div>
		</Wrapper>
	);
};
export default LogoutContainer;
