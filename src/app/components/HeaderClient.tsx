'use client'

import { useEffect, useState } from 'react'
import { SanityDocument } from 'next-sanity'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'
import Link from 'next/link'

export default function HeaderClient({
  menuList,
}: {
  menuList: SanityDocument[]
}) {
  const [menu, setMenu] = useState(menuList)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setMenu(menuList)
  }, [menuList])

  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--accent)] flex justify-between items-center p-4">
      <Link href="/" className="flex flex-col">
        <h1 className="text-2xl font-sans font-bold">
          Next JS Sanity Template
        </h1>
        <p className="text-sm font-mono">A Sandbox for Next JS with Sanity</p>
      </Link>
      <button
        onClick={toggleMobileMenu}
        className="hover:text-[var(--accent-light)]"
      >
        <MenuIcon />
      </button>
      {menuOpen && (
        <div
          className={`absolute top-0 right-0 w-full md:w-1/2 h-screen bg-[var(--background)] text-[var(--foreground)] border-l border-[var(--accent)] transform transition-all duration-300 ease-in-out opacity-0 ${
            menuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className="p-4 hover:text-[var(--accent-light)]"
          >
            <CloseIcon />
          </button>
          <ul className="flex flex-col gap-4 p-4">
            {menu.map((item) => (
              <li
                key={item._id}
                className="text-xl hover:text-[var(--accent-light)] cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
