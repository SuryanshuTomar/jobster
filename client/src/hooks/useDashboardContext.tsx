import { useContext } from "react";

import type { DashboardContextProps } from "../context/DashboardContext";
import { DashboardContext } from "../context/DashboardContext";

export const useDashboardContext = () =>
	useContext<DashboardContextProps>(DashboardContext);
