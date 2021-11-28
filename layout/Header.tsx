import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../data/navLinks";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  toggleMenu: any;
  isOpen: any;
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
  return (
    <header className="container">
      <nav className="nav">
        <Link href="#">
          <a className="nav__image-container">
            <Image
              src="/images/shared/desktop/logo.svg"
              height={26}
              width={236}
              alt={"coffee roasters logo"}
            ></Image>
          </a>
        </Link>

        <ul className="nav__links">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleMenu} className="nav__button">
          <div>
            <Image
              src="/images/shared/mobile/icon-hamburger.svg"
              width={16}
              height={15}
              alt="menu button"
              className={
                isOpen ? " btn nav__button--hide" : "nav__button--show"
              }
            ></Image>
          </div>
          <div>
            <Image
              src="/images/shared/mobile/icon-close.svg"
              width={16}
              height={15}
              alt="menu button"
              className={
                isOpen ? " btn nav__button--show" : "nav__button--hide"
              }
            ></Image>
          </div>
        </button>
      </nav>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
