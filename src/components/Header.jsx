import React from "react";
// images
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8 ">
      <div className="container mx-auto">
        <div className="flex justify-start items-center">
          {/* logo */}
          <a
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff56f6,#b936ee] to-[#3bace2,#406aff] font-bold text-[36px] font-tertiary "
            href="#"
          >
            BobbyTR
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
