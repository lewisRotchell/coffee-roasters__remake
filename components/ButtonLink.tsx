import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
  text: string;
  link: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="link-button">{text}</a>
    </Link>
  );
};
