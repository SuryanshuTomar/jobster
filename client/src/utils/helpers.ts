export const getCurrentThemeMode = () => {
	const isDarkMode = localStorage.getItem("darkMode") === "true";
	document.body.classList.toggle("dark-theme", isDarkMode);
	return isDarkMode;
};
