import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

interface FLinkProps {
  href: string;
  path: string;
  className?: string;
  children: React.ReactNode;
}

interface Linktype {
  href: string;
  content: React.ReactNode;
}

const FocusedLink: React.FC<FLinkProps> = ({
  href,
  path,
  className,
  children
}) => {
  return (
    <Link
      href={href}
      className={
        path === href
          ? "text-purple-400 font-semibold"
          : "text-gray-300 hover:text-purple-400 transition-colors " +
            (className ?? "")
      }
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LinkContents: Linktype[] = [
    { href: "/", content: "Home" },
    { href: "/posts", content: "Blogs" },
    { href: "/projects", content: "Projects" },
    { href: "/resume", content: "Resume" },
    { href: "/contact", content: "Contact" }
  ];

  return (
    <header
      className={`py-6 lg:px-10 top-0 fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a20]/90 backdrop-blur-sm shadow-lg" : "bg-[#0a0a20]"
      }`}
    >
      <div className="px-2 md:px-8 relative mx-auto max-w-6xl">
        <nav className="flex space-x-6 items-center justify-between">
          <Link href={"/"} className="text-xl ml-4">
            <div className="flex flex-row gap-1 items-center content-center">
              <span className="font-bold text-white">/</span>
              <span className="font-bold text-purple-400">Aaditya</span>
              <span className="font-bold text-white">.</span>
            </div>
          </Link>

          <div className="grow h-3"></div>

          {/* for large screen views only display this */}
          <div className="hidden lg:flex space-x-8 tracking-wide items-center justify-between">
            {LinkContents.map((item: Linktype, idx: number) => {
              return (
                <FocusedLink key={idx} href={item.href} path={router.asPath}>
                  {item.content}
                </FocusedLink>
              );
            })}
          </div>

          {/* for small screens */}
          <div
            className="flex flex-row-reverse lg:hidden border border-purple-800 rounded-md p-2 mr-3 hover:bg-purple-900/30 w-full cursor-pointer"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 24, color: "#8960df" }}
            />
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="w-full absolute lg:hidden bg-[#0a0a20] px-8 pb-4 shadow-2xl shadow-black border-t-0 z-50">
          <div className="w-full relative h-5">
            <span
              className="absolute top-0 right-4 p-2 hover:cursor-pointer"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 24, color: "#8960df" }}
              />
            </span>
          </div>
          <div className="w-full inline-flex flex-col space-y-4 py-4 mt-4 items-center bg-[#1a1a35] rounded-xl">
            {LinkContents.map((item: Linktype, idx: number) => {
              return (
                <FocusedLink
                  key={idx}
                  href={item.href}
                  path={router.asPath}
                  className="hover:font-semibold py-2"
                >
                  {item.content}
                </FocusedLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
