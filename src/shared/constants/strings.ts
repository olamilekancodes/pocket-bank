// Navbar

import { RiHomeLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";

export const NavItems = [
  { path: "/dashboard", label: "Dashboard", icon: RiHomeLine },
  { path: "/transactions", label: "Transactions", icon: FaExchangeAlt },
  { path: "/card", label: "Card", icon: FaRegCreditCard },
  { path: "/insights", label: "Insights", icon: PiTargetBold },
  { path: "/recipient", label: "Recipient", icon: PiUsersThreeBold },
];

export const NavStrings = {
  logoAlt: "Pocket Bank Logo",
  buttonTitle: "Log out"
};
