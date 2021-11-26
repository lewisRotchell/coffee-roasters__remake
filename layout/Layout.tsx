import React, { useState } from "react";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <>{children}</>
    </main>
  );
};
