import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoBarChartSharp } from "react-icons/io5";
import { MdAdminPanelSettings, MdQueryStats } from "react-icons/md";

export const Links = [
	{ text: "Add jobs", path: ".", icon: <FaWpforms /> },
	{ text: "Stats", path: "stats", icon: <MdQueryStats /> },
	{ text: "All jobs", path: "all-jobs", icon: <IoBarChartSharp /> },
	{ text: "Profile", path: "profile", icon: <ImProfile /> },
	{ text: "Admin", path: "admin", icon: <MdAdminPanelSettings /> },
];
