import type { FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface DashboardContextProps {
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
	showSidebar: false,
	toggleDarkMode: () => {},
	toggleSidebar: () => {},
	logoutUser: () => {},
};

const DashboardContext = createContext<DashboardContextProps>(
	initialDashboardValue
);

export const DashboardContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		console.log("Toggle dark Mode : ", isDarkMode);
	};
	
	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
		console.log("Toggle dark Mode : ", showSidebar);
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

export const useDashboardContext = () =>
	useContext<DashboardContextProps>(DashboardContext);
