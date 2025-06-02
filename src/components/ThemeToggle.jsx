import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    // State to manage dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check if dark mode is stored in local storage on initial render
   // it will help to set the initial state of theme even after page reload
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        // If dark mode is stored in local storage, set the state to true
        if (storedTheme == "dark") {
            // If dark mode is stored in local storage, set the state to true
            setIsDarkMode(true);
            // Apply dark mode class to the document element
            document.documentElement.classList.add("dark");
            // If dark mode is not stored, check the user's system preference
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            
        }

     }, []);
    
// Check if dark mode is enabled in local storage
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else {
            // document functions to toggle dark mode
            document.documentElement.classList.add("dark");
            // Set the theme in local storage
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    // Render the button with the appropriate icon based on the theme
    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
  
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
            <Moon className="h-6 w-6 text-blue-900" />
        )}</button>
};
