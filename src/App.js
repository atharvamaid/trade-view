import React, { useEffect } from "react";
import DashBoard from "./components/DashBoard";
import { useSelector } from "react-redux";

export default function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#000000",
      }}
    >
      <DashBoard />
    </div>
  );
}
