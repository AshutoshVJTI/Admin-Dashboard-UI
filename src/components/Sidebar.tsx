import React from "react";
import Tab1 from "../assets/sidebar/tab1.svg";
import Tab2 from "../assets/sidebar/tab2.svg";
import Tab3 from "../assets/sidebar/tab3.svg";
import Tab4 from "../assets/sidebar/tab4.svg";
import Help from "../assets/sidebar/help.svg";
import Info from "../assets/sidebar/info.svg";
import RightTooltip from "../assets/sidebar/righttooltip.svg";
import DownTooltip from "../assets/sidebar/downtooltip.svg";
import DropdownTabs from "../assets/sidebar/dropdowntabs.svg";
import Typo from "./Typo";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { isOpen } = props;
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

  return (
    <aside
      className={`fixed z-50 h-[calc(100vh-108px)] bg-white left-0 shadow-md pb-72 pt-14 flex flex-col g-384 ease-in-out duration-300 ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <table className="flex flex-col gap-4 table-auto">
        <tr
          className={`cursor-pointer flex py-2 px-4 hover:fill-blue-400 ${
            isOpen &&
            "hover:bg-sidebar-hover hover:text-blue-cyan hover:border-blue-cyan border-transparent border-l-4"
          } transition-all`}
        >
          <td>
            <img
              src={Tab1}
              alt="Dashboard"
              className="mx-auto hover:text-blue-cyan"
            />
          </td>
          <td>
            {isOpen && (
              <Typo fontFamily="OS" className="font-bold ml-3">
                Dashboard
              </Typo>
            )}
          </td>
        </tr>
        <tr
          className={`cursor-pointer flex py-2 px-4 hover:fill-blue-400 ${
            isOpen &&
            "border-blue-cyan border-l-4  bg-sidebar-hover hover:bg-sidebar-hover hover:text-blue-cyan hover:border-blue-cyan border-transparent border-l-4"
          }  text-blue-cyan  transition-all`}
        >
          <td>
            <img src={Tab2} alt="Practice" className="mx-auto" />
          </td>
          <td>
            {isOpen && (
              <Typo fontFamily="OS" className="font-bold text-grey-700 ml-3">
                Practice
              </Typo>
            )}
          </td>
        </tr>
        <tr
          className={`cursor-pointer py-2 px-4 hover:fill-blue-400 hover:text-blue-cyan ${"border-l-4 border-transparent"} transition-all`}
        >
          <button
            className="relative flex items-center w-full"
            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          >
            <td>
              <img src={Tab3} alt="User Accounts" className="mx-auto" />
            </td>
            <td>
              {isOpen && (
                <Typo fontFamily="OS" className="font-bold text-grey-700 ml-3">
                  User Accounts
                </Typo>
              )}
            </td>
            <td className="absolute right-0">
              {!isTooltipOpen && <img src={RightTooltip} alt="RightTooltip" />}
              {isTooltipOpen && <img src={DownTooltip} alt="DownTooltip"/>}
            </td>
          </button>
        </tr>
          <table style={{display: isTooltipOpen ? 'block' : 'none'}} className={"group ease-in-out duration-200"}>
            <tr
              className={`cursor-pointer flex py-2 ${
                isOpen
                  ? "pl-16  hover:bg-sidebar-hover hover:border-blue-cyan border-transparent border-l-4"
                  : "pl-9"
              } hover:fill-blue-400 hover:text-blue-cyan transition-all`}
            >
              <td>
                <img src={DropdownTabs} alt="Create" className="mx-auto" />
              </td>
              <td>
                {isOpen && (
                  <Typo
                    fontFamily="OS"
                    className="font-semibold text-grey-700 ml-3"
                  >
                    Create
                  </Typo>
                )}
              </td>
            </tr>
            <tr
              className={`cursor-pointer flex py-2 ${
                isOpen
                  ? "pl-16  hover:bg-sidebar-hover hover:border-blue-cyan border-transparent border-l-4"
                  : "pl-9"
              } hover:fill-blue-400 hover:text-blue-cyan transition-all`}
            >
              <td>
                <img src={DropdownTabs} alt="Assign User" className="mx-auto" />
              </td>
              <td>
                {isOpen && (
                  <Typo
                    fontFamily="OS"
                    className="font-semibold text-grey-700 ml-3"
                  >
                    Assign User
                  </Typo>
                )}
              </td>
            </tr>
            <tr
              className={`cursor-pointer flex py-2 ${
                isOpen
                  ? "pl-16  hover:bg-sidebar-hover hover:border-blue-cyan border-transparent border-l-4"
                  : "pl-9"
              } hover:fill-blue-400 hover:text-blue-cyan transition-all`}
            >
              <td>
                <img src={DropdownTabs} alt="Access Log" className="mx-auto" />
              </td>
              <td>
                {isOpen && (
                  <Typo
                    fontFamily="OS"
                    className="font-semibold text-grey-700 ml-3"
                  >
                    Access Log
                  </Typo>
                )}
              </td>
            </tr>
          </table>
        <tr
          className={`cursor-pointer flex py-2 px-4 hover:fill-blue-400 ${
            isOpen &&
            "hover:bg-sidebar-hover hover:text-blue-cyan hover:border-blue-cyan border-transparent border-l-4"
          } transition-all`}
        >
          <td>
            <img src={Tab4} alt="MIS Report" className="mx-auto" />
          </td>
          <td>
            {isOpen && (
              <Typo fontFamily="OS" className="font-bold text-grey-700 ml-3">
                MIS Report
              </Typo>
            )}
          </td>
        </tr>
        <tr
          className={`cursor-pointer flex py-2 px-4 hover:fill-blue-400 ${
            isOpen &&
            "hover:bg-sidebar-hover hover:text-blue-cyan hover:border-blue-cyan border-transparent border-l-4"
          } transition-all`}
        >
          <td>
            <img src={Info} alt="Online Help" className="mx-auto" />
          </td>
          <td>
            {isOpen && (
              <Typo fontFamily="OS" className="font-bold text-grey-700 ml-3">
                Online Help
              </Typo>
            )}
          </td>
        </tr>
        <tr
          className={`cursor-pointer flex py-2 px-4 hover:fill-blue-400 ${
            isOpen &&
            "hover:bg-sidebar-hover hover:text-blue-cyan hover:border-blue-cyan border-transparent border-l-4"
          } transition-all`}
        >
          <td>
            <img src={Help} alt="Contact Support" className="mx-auto" />
          </td>
          <td>
            {isOpen && (
              <Typo fontFamily="OS" className="font-bold text-grey-700 ml-3">
                Contact Support
              </Typo>
            )}
          </td>
        </tr>
      </table>
    </aside>
  );
};

export default Sidebar;
