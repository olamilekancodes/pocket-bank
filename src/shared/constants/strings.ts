// Navbar

import { RiHomeLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";
import { TbArrowBarToLeft } from "react-icons/tb";

export const NavItems = [
  { path: "/dashboard", label: "Dashboard", icon: RiHomeLine },
  { path: "/transactions", label: "Transactions", icon: FaExchangeAlt },
  { path: "/card", label: "Card", icon: FaRegCreditCard },
  { path: "/insights", label: "Insights", icon: PiTargetBold },
  { path: "/recipient", label: "Recipient", icon: PiUsersThreeBold },
];

export const NavStrings = {
  logoAlt: "Pocket Bank Logo",
  buttonTitle: "Log out",
};

// Topbar

export const TopBarStrings = {
  user: "Olamilekan",
  logoAlt: "Pocket Bank logo",
};

// Dashboard
export const DashboardStrings = {
  accountBalance: {
    currentBalance: "23,232.00",
    currency: "N",
    accountTitle: "Account No:",
    balanceTitle: "Current Balance",
    accountNo: "0026257267",
  },

  buttons: [
    { title: "Transfer", icon: BsArrowUpRightCircleFill, variant: "secondary" },
    { title: "Request", icon: TbArrowBarToLeft },
    { title: "Deposit", icon: PiPlusBold },
  ],

  table: {
    title: "Recent Transactions",
    link: "See all",
  },
};

// Table

export const TableStrings = {
  headCells: [
    { id: "description", label: "Description" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
  ],
  showing: "Showing",
  result: "results",
  of: "of",
};

// Transaction

export const TransactionStrings = {
  pageTitle: "All Transactions",
  filter: {
    all: "All",
    credit: "Credit",
    debit: "Debit",
  },
  searchPlaceHolder: "Search transaction...",
};

// Coming Soon

export const ComingSoonStrings = {
  title: "Coming Soon",
};

// Login

export const LoginStrings = {
  welcomeNote: "Welcome Back!",
  email: {
    validation1: "Please enter a valid email address",
    validation2: "Email is required",
    fieldName: "Email Address",
  },
  password: {
    validation1: "Please enter a valid email address",
    validation2: "Password is required",
    fieldName: "Password",
  },
  buttonTitle: {
    title1: "Submitting",
    title2: "Login to Dashboard",
  },
  errorMessage: "The email or password you entered is incorrect",
};

// Transform

export const TransferFormStrings = {
  accountNumber: {
    validation1: "Account number must be a number",
    validation2: "Account number is required",
    fieldName: "Account Number",
  },
  amount: {
    validation1: "Amount must be a number",
    validation2: "Amount is required",
    validation3: "mount must be greater than 0",
    validation4: "Insufficient balance",
    fieldName: "Amount",
  },
  bankName: {
    validation1: "Bank Name is required",
    fieldName: "Bank Name",
  },
  notificationMessage: "Transfer successful!",
  buttonTitle: {
    title1: "Processing...",
    title2: "Transfer",
  },
};

// Empty data state

export const EmptyStateStrings = {
  title: "No data available",
};
