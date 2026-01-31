import type { ButtonHTMLAttributes } from "react";

export interface TransactionTableProps<T> {
  transactions: T[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SideBarProps {
  onLinkClose: () => void;
}

export interface TopBarProps {
  action: () => void;
}

export interface AvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  title: string;
  variant?: ButtonVariant;
  action?: () => void;
}

export type ButtonVariant = "primary" | "secondary";

export interface CustomPaginationProps {
  current_page: number;
  total_pages: number;
  items_per_page: number;
  setItemPerPage: (num: number) => void;
  setCurrentPage: (page: number) => void;
}

export interface StatusChipProps {
  status: string;
}

export interface StyledTdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export interface HeadCell {
  id: string;
  label: string;
}

export interface SimpleTableWrapperProps {
  headCells?: HeadCell[];
  children: React.ReactNode;
}

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: Variant;
  children: React.ReactNode;
}

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface PaginationProps<T> {
  data: T[];
  order_control: keyof T;
  initial_items_per_page?: number;
}

export interface UseResponsiveReturn {
  breakpoint: Breakpoint;
  width: number;
  isXsUp: boolean;
  isSmUp: boolean;
  isMdUp: boolean;
  isLgUp: boolean;
  isXsDown: boolean;
  isSmDown: boolean;
  isMdDown: boolean;
  isLgDown: boolean;
  isXsOnly: boolean;
  isSmOnly: boolean;
  isMdOnly: boolean;
  isLgOnly: boolean;
}

export type Breakpoint = "xs" | "sm" | "md" | "lg";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
