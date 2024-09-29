import { Copyright } from "lucide-react";
import React from "react";

const FooterSec = () => {
  return (
    <div className="bg-[#272727] text-white">
      {/* <hr className="w-full"/> */}
      <div className="flex mx-80 py-32">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <img
              src="candleaf.png"
              alt=""
              className="object-cover rounded-full bg-white"
            />
            <h1 className="text-[#FFFFFF] text-4xl font-bold">Candleaf</h1>
          </div>
          <div>
            <p className="text-[#FFFFFF] max-w-[245px]">
              Your natural candle made for your home and for your wellness.
            </p>
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="flex flex-row flex-1">
            <ul className="space-y-4 text-[#E1E1E1] font-medium">
              <li className="text-[#56B280] font-medium">
                <a href="">Discovery</a>
              </li>
              <li>
                <a href="">New season</a>
              </li>
              <li>
                <a href="">Most searched</a>
              </li>
              <li>
                <a href="">Most selled</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row flex-1">
            <ul className="space-y-4 text-[#E1E1E1] font-medium">
              <li className="text-[#56B280] font-medium">
                <a href="">About</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
              <li>
                <a href="">Affiliate</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row flex-1">
            <ul className="space-y-4 text-[#E1E1E1] font-medium">
              <li className="text-[#56B280] font-medium">
                <a href="">Info</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Privacy Policies</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#E5E5E5] py-4 px-80">
        <div className="flex items-center justify-between">
          <p className="text-[#5E6E89] flex">
            <Copyright />
            Candleaf All Rights Reserved.
          </p>
          <span className="text-[#5E6E89]">Designed by me</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;
