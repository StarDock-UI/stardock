import { useState, ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			<div data-theme={darkMode ? 'dark' : 'light'}>{children}</div>
		</ThemeContext.Provider>
	);
};
