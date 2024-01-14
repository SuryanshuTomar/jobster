import type { FC } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../hooks/useDashboardContext";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
	const { isDarkMode, toggleDarkMode } = useDashboardContext();

	return (
		<Wrapper onClick={toggleDarkMode}>
			{isDarkMode === true ? (
				<BsFillSunFill className="toggle-icon" />
			) : (
				<BsFillMoonFill className="toggle-icon" />
			)}
		</Wrapper>
	);
};

export default ThemeToggle;
