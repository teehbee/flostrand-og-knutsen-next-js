import { ReactNode, MouseEventHandler } from "react";

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
