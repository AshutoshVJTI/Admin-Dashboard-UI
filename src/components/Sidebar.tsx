import React from "react";
import Tab1 from "../assets/sidebar/tab1.svg";
import Tab2 from "../assets/sidebar/tab2.svg";
import Tab3 from "../assets/sidebar/tab3.svg";
import Tab4 from "../assets/sidebar/tab4.svg";
import Help from "../assets/sidebar/help.svg";
import Info from "../assets/sidebar/info.svg";
import Typo from "./Typo";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { isOpen } = props;

  return (
    <aside
      className={`fixed z-50 h-[calc(100vh-108px)] bg-white left-0 shadow-md pb-72 pt-14 flex flex-col g-384 items-center ease-in-out duration-300 ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <table className="flex flex-col gap-6 table-auto">
        <tr className="cursor-pointer flex">
          <td>
            <img src={Tab1} alt="Dashboard" className="mx-auto" />
          </td>
          <td>
            {isOpen && (
              <Typo fontFamily="OS" className="font-bold ml-3">
                Dashboard
              </Typo>
            )}
          </td>
        </tr>
        <tr className="cursor-pointer flex">
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
        <tr className="cursor-pointer flex">
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
        </tr>
        <tr className="cursor-pointer flex">
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
      </table>
      <table className="flex flex-col gap-6 table-auto">
        <tr className="cursor-pointer flex">
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
        <tr className="cursor-pointer flex">
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
