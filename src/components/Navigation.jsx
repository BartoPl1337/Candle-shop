import { ShoppingBasket, User } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="my-6 mx-32 flex items-center">
        <div className="flex-1 flex items-center">
        <Link to="/" className="flex">
          <img src="icon.png" alt="" />
          <span className="text-[#56B280] font-bold text-2xl">Candleaf</span>
        </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Discovery</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col p-4 w-[150px] font-semibold text-base space-y-2">
                  <NavigationMenuLink>New season</NavigationMenuLink>
                  <NavigationMenuLink>Most searched</NavigationMenuLink>
                  <NavigationMenuLink>Most selled</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: "cursor-pointer",
                })}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: "cursor-pointer",
                })}
              >
                Contact us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex-1 flex justify-end gap-6">
          <a href="">
            <User />
          </a>

          <Link to="/products">
            <ShoppingBasket />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
