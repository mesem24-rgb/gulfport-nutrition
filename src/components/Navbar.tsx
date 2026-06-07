"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#menu" className="hover:text-green-700">Menu</a>
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#location" className="hover:text-green-700">Location</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>

        <div className="hidden md:block">
          <a
            href="https://www.facebook.com/gulfportnutrition/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            Order Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-bold text-green-900 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
            <a onClick={() => setOpen(false)} href="#menu">Menu</a>
            <a onClick={() => setOpen(false)} href="#about">About</a>
            <a onClick={() => setOpen(false)} href="#location">Location</a>
            <a onClick={() => setOpen(false)} href="#contact">Contact</a>
            <a
              onClick={() => setOpen(false)}
              href="https://www.facebook.com/gulfportnutrition/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-700 px-5 py-3 text-center text-white"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
