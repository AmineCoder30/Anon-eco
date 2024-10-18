import React from "react";
import SocialMediaButtons from "../ui/SocialMediaButtons";
import DescktopMenu from "../ui/DescktopMenu";
import MobileNavabr from "../ui/MobileNavabr";
import MainHeader from "../ui/MainHeader";

function Header() {
  return (
    <header className="w-full">
      {/* top header */}
      <div className="w-full border-b border-gray-100">
        <div className="container mx-auto py-5 flex justify-between items-center">
          <SocialMediaButtons />
          <p className=" text-gray-500 uppercase ">
            Free Shipping This Week Order Over - $55
          </p>
          <div className="text-gray-500 hidden sm:flex">
            <select
              className="mr-3 outline-none uppercase"
              name="lang"
              id="lang"
            >
              <option value="en">English</option>
              <option value="fr">frensh</option>
            </select>
            <select className="outline-none uppercase" name="curr " id="curr">
              <option value="USE $">USE $</option>
              <option value="EUR $">EUR $</option>
            </select>
          </div>
        </div>
      </div>
      {/* main header */}
      <MainHeader />
      {/* mobile navigation */}
      <MobileNavabr />
      {/* desktop navigation */}
      <DescktopMenu />
    </header>
  );
}

export default Header;
