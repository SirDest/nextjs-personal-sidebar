"use client";
import { useState } from "react";
import SideBar from "./components/SideBar";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div
      className={`w-full h-screen bg-gray-600 fixed ${
        darkMode ? "text-gray-950 bg-white" : "text-gray-200 bg-gray-950"
      }`}
    >
      <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
