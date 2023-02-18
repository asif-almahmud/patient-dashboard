import React from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  // {
  //   name: "Dashboard",
  //   link: "dashboard",
  // },
  {
    name: "Schedule",
    link: "schedule",
  },
  {
    name: "Settings",
    link: "settings",
  },
];

const Navbar = ({ closeModal }) => {
  return (
    <div className="m-4">
      <ul className="flex flex-col gap-[1px]">
        {tabs.map((tab) => (
          <li key={tab.name} className="flex">
            <NavLink
              to={tab.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200/50 py-1 px-6 w-full rounded-md outline outline-2 outline-gray-400"
                  : "w-full py-1 px-6"
              }
              onClick={closeModal}
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
