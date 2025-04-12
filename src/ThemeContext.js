"use client"
import { createContext, useContext, useState, useEffect } from "react"

// Create a context
const ThemeContext = createContext()

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark-mode")
      document.documentElement.classList.remove("light-mode")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.add("light-mode")
      document.documentElement.classList.remove("dark-mode")
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("theme", newMode ? "dark" : "light")

      if (newMode) {
        document.documentElement.classList.add("dark-mode")
        document.documentElement.classList.remove("light-mode")
      } else {
        document.documentElement.classList.add("light-mode")
        document.documentElement.classList.remove("dark-mode")
      }

      return newMode
    })
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext)
}
