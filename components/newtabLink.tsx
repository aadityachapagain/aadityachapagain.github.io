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
    <div>
      <Link href={href} passHref legacyBehavior>
        <a target={"_blank"} rel="noreferrer">
          <div className={className}>{children}</div>
        </a>
      </Link>
    </div>
  );
};

export default NewTabLink;
