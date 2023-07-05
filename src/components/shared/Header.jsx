import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                className="h-44 w-44 object-contain"
                src="/png/logoHome.png"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="inline-flex cursor-pointer rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600">
            <Link to="/about-me">Acerca de mí</Link>
          </li>
          <li className="inline-flex cursor-pointer rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50">
            <Link to="/projects">Proyectos</Link>
          </li>
          <li className="inline-flex cursor-pointer rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50">
            <Link to="/contact-me">Contáctame</Link>
          </li>
          <li className="inline-flex cursor-pointer rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50">
            <Link to="/education">Educación</Link>
          </li>
          <li className="inline-flex cursor-pointer rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50">
            <Link to="/skills">Habilidades</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
