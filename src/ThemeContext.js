"use client"
import { createContext, useContext, useState, useEffect } from "react"

// Create a context
const ThemeContext = createContext()

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Function to apply theme to document
  const applyTheme = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode")
      document.documentElement.classList.remove("light-mode")
      document.body.classList.add("dark-mode")
      document.body.classList.remove("light-mode")

      // Directly set background color on body
      document.body.style.backgroundColor = "#121212"
      document.body.style.color = "#f5f5f5"
    } else {
      document.documentElement.classList.add("light-mode")
      document.documentElement.classList.remove("dark-mode")
      document.body.classList.add("light-mode")
      document.body.classList.remove("dark-mode")

      // Directly set background color on body
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "#333333"
    }
  }

  // Initialize theme from localStorage or default to light mode
  useEffect(() => {
    // Apply theme immediately on mount to avoid flash of wrong theme
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

    // Use saved theme or system preference
    const initialDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(initialDarkMode)
    applyTheme(initialDarkMode)
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("theme", newMode ? "dark" : "light")
      applyTheme(newMode)
      return newMode
    })
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext)
}
