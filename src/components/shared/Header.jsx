import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isItOpen, setIsItOpen] = useState(false);

  const handleIsItOpen = () => {
    setIsItOpen(!isItOpen);
  };

  return (
    <header className="flex h-20 w-full">
      <nav className="fixed top-0 z-10 flex w-full flex-col bg-gray-100">
        <ul className="flex w-full items-center justify-between px-2">
          <li className="flex h-max w-max items-center justify-center">
            <NavLink to="/" caseSensitive>
              <img
                className="h-44 w-44 object-contain max-sm:h-12 small:h-16 large:h-20"
                src="/png/logoHome.png"
              />
            </NavLink>
          </li>
          <li className="h-max w-max">
            <div className="flex items-center justify-center sm:hidden">
              {isItOpen ? (
                <button className="z-20" onClick={handleIsItOpen}>
                  <i className="bx bx-x text-4xl small:text-5xl large:text-6xl"></i>
                </button>
              ) : (
                <button className="z-20" onClick={handleIsItOpen}>
                  <i className="bx bx-menu text-4xl small:text-5xl large:text-6xl"></i>
                </button>
              )}
            </div>
          </li>
        </ul>
        <div
          className={`z-10 h-screen w-full transform bg-gray-100 max-sm:fixed max-sm:top-0 ${
            isItOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500`}
        >
          <ul className="flex gap-2 max-sm:h-screen max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4 small:gap-6 medium:gap-8">
            <li className="sm:hidden">
              <NavLink to="/">
                <img
                  className="w-64 object-contain"
                  src="/png/logoFooter.png"
                />
              </NavLink>
            </li>
            <li className="w-max">
              <NavLink
                to="/about-me"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "flex w-36 cursor-pointer justify-center rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                    : "flex w-36 cursor-pointer justify-center rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50 hover:bg-gradient-to-tr active:border-b-green-800 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                }
                caseSensitive
              >
                Acerca de mí
              </NavLink>
            </li>
            <li className="w-max">
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "flex w-36 cursor-pointer justify-center rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                    : "flex w-36 cursor-pointer justify-center rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50 active:border-b-green-800 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                }
                caseSensitive
              >
                Proyectos
              </NavLink>
            </li>
            <li className="w-max">
              <NavLink
                to="/contact-me"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "flex w-36 cursor-pointer justify-center rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                    : "flex w-36 cursor-pointer justify-center rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50 active:border-b-green-800 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                }
                caseSensitive
              >
                Contáctame
              </NavLink>
            </li>
            <li className="w-max">
              <NavLink
                to="/education"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "flex w-36 cursor-pointer justify-center rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                    : "flex w-36 cursor-pointer justify-center rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50 active:border-b-green-800 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                }
                caseSensitive
              >
                Educación
              </NavLink>
            </li>
            <li className="w-max">
              <NavLink
                to="/skills"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "flex w-36 cursor-pointer justify-center rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                    : "flex w-36 cursor-pointer justify-center rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50 active:border-b-green-800 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                }
                caseSensitive
              >
                Habilidades
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
