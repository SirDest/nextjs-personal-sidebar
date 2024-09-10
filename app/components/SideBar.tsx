"use client";
import React, { useState } from "react";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Image from "next/image";
import logo from "@/app/static/images/avatar.png";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const SideBar = ({ darkMode, setDarkMode }) => {
  const [expanded, setExpanded] = useState(true);

  const showSideBar = () => {
    setExpanded((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`h-screen w-fit bg-none flex gap-2 translate-all`}>
      <div className='h-full transition-all p-4 w-fit flex flex-col justify-between border-r border-gray-300'>
        <div className=''>
          <div className='flex gap-3 items-center'>
            <div className={`${expanded ? "w-[50px]" : "w-[35px]"}`}>
              <Image sizes='sm' src={logo} alt='LOGO' />
            </div>
            {expanded && (
              <div className='flex flex-col'>
                <p className='text-md font-bold'>AKINRO Destined</p>
                <p className='text-sm font-normal'>FrontEnd Developer</p>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-3 items-center'>
            <div className=''>
              <ExitToAppOutlinedIcon />
            </div>
            {expanded && (
              <div className='flex'>
                <p className='text-sm font-normal'>Log Out</p>
              </div>
            )}
          </div>
          <div className='flex items-center gap-4 text-sm'>
            {expanded && <LightModeOutlinedIcon />}
            {expanded && <p className='text-sm font-normal'>LightMode</p>}

            <div onClick={toggleDarkMode} className='flex items-center'>
              {darkMode ? (
                <ToggleOffOutlinedIcon className='text-[30px] text-red-600' />
              ) : (
                <ToggleOnOutlinedIcon className='text-[30px] text-blue-600' />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={showSideBar} className='text-lg p-1 h-fit'>
          {expanded ? (
            <KeyboardDoubleArrowLeftOutlinedIcon />
          ) : (
            <KeyboardDoubleArrowRightOutlinedIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
