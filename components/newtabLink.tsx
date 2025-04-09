import Link from "next/link";
import { ReactNode } from "react";
import { Url, UrlObject } from "url";

interface INewTabLink {
  className?: string;
  children?: ReactNode;
  href: Url | UrlObject | string;
}

const NewTabLink: React.FC<INewTabLink> = ({ className, href, children }) => {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className || "text-purple-400 hover:text-purple-300 transition-colors"}
    >
      {children}
    </Link>
  );
};

export default NewTabLink;