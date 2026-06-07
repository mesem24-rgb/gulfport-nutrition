import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#menu" className="hover:text-green-700">
            Menu
          </a>
          <a href="#about" className="hover:text-green-700">
            About
          </a>
          <a href="#location" className="hover:text-green-700">
            Location
          </a>
          <a href="#contact" className="hover:text-green-700">
            Contact
          </a>
        </div>

        <a
          href="https://www.facebook.com/gulfportnutrition/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white hover:bg-green-800"
        >
          Order Now
        </a>
      </nav>
    </header>
  );
}
