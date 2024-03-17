import type { FC, ReactNode } from "react";
import { createContext, useState } from "react";

import { getCurrentThemeMode } from "../utils/helpers";

export interface DashboardContextProps {
	user: { name: string };
	isDarkMode: boolean;
	showSidebar: boolean;
	toggleDarkMode: () => void;
	toggleSidebar: () => void;
	logoutUser: () => void;
}

const initialDashboardValue: DashboardContextProps = {
	user: { name: "John" },
	isDarkMode: false,
	showSidebar: true,
	toggleDarkMode: () => {},
	toggleSidebar: () => {},
	logoutUser: () => {},
};

export const DashboardContext = createContext<DashboardContextProps>(
	initialDashboardValue
);

export const DashboardContextProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(getCurrentThemeMode());
	const [showSidebar, setShowSidebar] = useState(
		initialDashboardValue.showSidebar
	);

	const toggleDarkMode = () => {
		const updatedDarkMode = !isDarkMode;
		setIsDarkMode(updatedDarkMode);
		document.body.classList.toggle("dark-theme", !updatedDarkMode);
		localStorage.setItem("darkMode", updatedDarkMode + "");
	};

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const logoutUser = async () => {
		console.log("User logged out");
	};

	return (
		<DashboardContext.Provider
			value={{
				user: initialDashboardValue.user,
				isDarkMode,
				showSidebar,
				logoutUser,
				toggleDarkMode,
				toggleSidebar,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};
