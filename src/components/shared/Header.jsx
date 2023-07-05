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
        <ul>
          <li>
            <Link to="/about-me">Acerca de mí</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact-me">Contáctame</Link>
          </li>
          <li>
            <Link to="/education">Educación</Link>
          </li>
          <li>
            <Link to="/skills">Habilidades</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
