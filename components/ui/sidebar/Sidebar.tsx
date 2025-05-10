"use client";
import React, { useState } from "react";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sidebarConfig } from "@/config/site";
import { ThemeSwitch } from "../theme/theme-switch";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`py-7 px-5 bg-white border-t-2 border-gray-100  m-5 rounded-3xl ${isOpen ? "w-[20%]" : "w-[5%]"} transition-all flex flex-col gap-16 duration-300`}
    >
      <ThemeSwitch />
      <div className="flex gap-12 items-center justify-between">
        <p className={`text-lg font-bold ${isOpen ? "block" : "hidden"}`}>
          Ummanity Records
        </p>
        <BsReverseLayoutSidebarReverse
          className=" cursor-pointer hover:bg-gray-200  p-2 mx-auto text-gray-600 rounded-xl"
          size={35}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-6">
          {sidebarConfig.map((item, key) => (
            <div key={key} className="flex flex-col my-1 w-full">
              {item.label && (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-gray-50 border-r-2 border-neutral-100 backdrop-blur-md px-4 py-2 rounded-xl"
                >
                  {item.icon && (
                    <div className="bg-gray-300 p-2 rounded-xl">
                      <FontAwesomeIcon icon={item.icon} size="1x" />
                    </div>
                  )}
                  <p
                    className={`  text-base font-medium ${isOpen ? "block" : "hidden"}`}
                  >
                    {item.label}
                  </p>
                </div>
              )}
              {item.children && (
                <div key={item.label} className="flex flex-col px-4 py-2 gap-4">
                  <div className="flex items-center gap-4">
                    {item.icon && (
                      <FontAwesomeIcon icon={item.icon} size="1x" />
                    )}
                    <p
                      className={`  text-base font-medium ${isOpen ? "block" : "hidden"}`}
                    >
                      {item.title}
                    </p>
                  </div>

                  <div className="flex flex-col items-start pl-8 gap-4">
                    {item.children?.map((child, index) => (
                      <div
                        key={child.label ?? "child" + index}
                        className="flex items-center gap-2"
                      >
                        <p
                          className={`text-base font-medium ${isOpen ? "block" : "hidden"}`}
                        >
                          {child.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
