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
import { cartStore } from "@/atom";
import { useAtom } from "jotai";

const Navigation = () => {
  const [cart, setCart] = useAtom(cartStore);
  return (
    <>
      <nav className=" border-b border-[#56B280]/20 py-6 px-32 flex items-center">
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex">
            <img src="/icon.png" alt="" />
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

          <Link to="/Cart" className="relative">
            <ShoppingBasket className=""/>
            <span className="absolute -top-2 right-1 bg-[#56B280] text-white text-sm font-semibold rounded-full h-4 w-4 flex items-center justify-center">{cart.length}</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
