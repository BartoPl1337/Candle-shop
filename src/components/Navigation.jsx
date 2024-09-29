import { ShoppingBasket, User } from "lucide-react";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav className="my-6 mx-32 flex items-center">
        <div className="flex-1 flex items-center">
          <img src="icon.png" alt="" />
          <span className="text-[#56B280] font-bold text-2xl">Candleaf</span>
        </div>
        <ul className="flex-1 flex justify-center gap-12 font-semibold">
          <li>
            <a href="">Discovery</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
        <div className="flex-1 flex justify-end gap-6">
          <a href="">
            <User />
          </a>
          <a href="">
            <ShoppingBasket />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
