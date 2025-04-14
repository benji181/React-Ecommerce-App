import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// Initialize theme class on the document root and body
const savedTheme = localStorage.getItem("theme")
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
const initialTheme = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark-mode" : "light-mode"

document.documentElement.classList.add(initialTheme)
document.body.classList.add(initialTheme)

// Force the background color directly on body
if (initialTheme === "dark-mode") {
  document.body.style.backgroundColor = "#121212"
  document.body.style.color = "#f5f5f5"
} else {
  document.body.style.backgroundColor = "#ffffff"
  document.body.style.color = "#333333"
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
