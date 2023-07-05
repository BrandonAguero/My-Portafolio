import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-auto w-full">
      <nav className="flex w-full items-center justify-between">
        <ul>
          <li>
            <NavLink to="/" caseSensitive>
              <img
                className="h-44 w-44 object-contain"
                src="/png/logoHome.png"
              />
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
      </nav>
    </header>
  );
};

export default Header;
