import { faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'


interface FLinkProps {
  href: string
  path: string
  className?: string
  children: React.ReactNode
}

interface Linktype {
  href: string
  content: React.ReactNode
}
const FocusedLink: React.FC<FLinkProps> = ({
  href,
  path,
  className,
  children
}) => {

  return <Link href={href} className={href === path? "text-black font-semibold": " " + className??" " }>{children}</Link>
}

export default function Header() {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();

  const LinkContents: Linktype[]  = [
    {href: '/', content: "About Me" },
    {href: '/posts', content: "Logs" },
    {href: '/projects', content: "Projects"},
    {href: '/sapiens', content: "Thoughts"},
    {href: '/resume', content: "Resume"},
    {href: '/contact', content: "Contact"}
]
  return (
    <header className="py-8 lg:px-10 ">
      <div className='px-2 md:px-8 relative'>
        <nav className="flex space-x-6 text-zinc-400 tracking-wide items-center justify-between ">
          <Link
            href={'/'}
            className="text-xl ml-4 ">
              <div className='flex flex-row gap-1 items-center content-center '>
                <Image
                  className='mr-2'
                  src={"/aaditya-profile.png"}
                  alt='profile logo'
                  height={48}
                  width={48}
                ></Image>
                {' '}
                <span className='font-bold text-black'>
                  Aaditya
                </span>
                {' '}
                <span>
                  Chapagain
                </span>
              </div>
            </Link>
          <div className='grow h-full'>
            {' '}
          </div>
          {/* for large screen views only display this */}
          <div className='hidden lg:flex space-x-6 text-zinc-400 tracking-wide items-center justify-between '>
            {LinkContents.map((item: Linktype, idx: number) => {
              return (
                <FocusedLink
                  key={idx}
                  href={item.href}
                  path={router.asPath}
                >{item.content}</FocusedLink>
              )
            })}
          </div>
          {/* for small screens */}
          <div
            className='flex lg:hidden border rounded-md p-2 mr-3 hover:bg-stone-200 '
            onClick={() => {
              setShowMenu(!showMenu)
            }}
            >
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 24, color: "black"}}
            />
          </div>
        </nav>
      </div>
      { showMenu && (
        <div className='w-full absolute lg:hidden bg-white px-8 pb-4 shadow-2xl shadow-gray-800 border-t-0 '>
          <div className='w-full relative h-5'>
            <span
              className='absolute top-0 right-4 p-2 hover:cursor-pointer '
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 24, color: "red"}}
              />
            </span>
          </div>
          <div className='w-full inline-flex flex-col space-y-4 py-4 mt-4 items-center bg-slate-50 rounded-xl '>
            {LinkContents.map((item: Linktype, idx: number) => {
                return (
                  <FocusedLink
                  key={idx}
                  href={item.href}
                  path={router.asPath}
                  className="hover:font-semibold "
                >{item.content}</FocusedLink>
                )
              })}
          </div>
        </div>
      )}
    </header>
  )
}
