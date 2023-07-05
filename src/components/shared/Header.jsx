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
      </nav>
    </header>
  );
};

export default Header;
