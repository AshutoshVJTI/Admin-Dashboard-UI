import React from "react";
import Logo from "../assets/header/logo.svg";
import Hamburger from "../assets/header/hamburger.svg";
import Messages from "../assets/header/messages.svg";
import Notifications from "../assets/header/notifications.svg";
import TooltipDown from "../assets/header/tooltipdown.svg";
import Avatar from "../assets/header/avatar.svg";
import Typo from "./Typo";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: HeaderProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <header className="bg-white border border-whisper pl-7 pr-10 py-4 flex justify-between items-center">
      <div className="flex gap-14">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Hamburger} alt="Hamburger" />
        </button>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        <button className="text-white mr-4 relative focus:outline-none">
          <img src={Messages} alt="Messages" />
          <span
            className="bg-red-600 text-white rounded-full px-1 py-0.5 absolute bottom-3 left-3"
            style={{ fontSize: 8 }}
          >
            10
          </span>
        </button>
        <button className="text-white mr-4 relative focus:outline-none">
          <img src={Notifications} alt="Notifications" />
          <span
            className="bg-red-600 text-white rounded-full px-1 py-0.5 text-xs absolute bottom-2.5 left-2"
            style={{ fontSize: 8 }}
          >
            10
          </span>
        </button>
        <div className="flex gap-4 items-center">
          <Typo fontFamily="SF" className="font-semibold">
            <div className="text-sm">Armand</div>{" "}
            <div className="text-xs">Supervisor</div>
          </Typo>
          <img src={Avatar} alt="Avatar" />
          <div>
            <button className="text-white focus:outline-none">
              <img src={TooltipDown} alt="TooltipDown" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
