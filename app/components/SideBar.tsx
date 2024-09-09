import React, { useState } from "react";

const SideBar = () => {
  const [expanded, setExpanded] = useState(true);

  return <div className='h-screen w-[300px] bg-red-500'>SideBar</div>;
};

export default SideBar;
