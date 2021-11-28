import React from "react";
import Link from "next/link";
import { navLinks } from "../data/navLinks";

interface MobileMenuProps {
  toggleMenu: any;
  isOpen: any;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <aside
      className={isOpen ? "mobile-menu mobile-menu--show " : "mobile-menu "}
    >
      <nav className="mobile-menu__nav">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href="#">
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
