import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
	const [location, setLocation] = useState({});
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openSubmenu = (text, coordinates) => {
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};

	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu,
				isSidebarOpen,
				isSubmenuOpen,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
