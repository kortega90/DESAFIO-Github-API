import { NavLink } from 'react-router-dom';
import './styles.css'
export default function Header() {
  return (
        <header>
          <div className="header-content container">
            <nav>

              <NavLink
                to="/home"
                className="menu-item">
                Github API
              </NavLink>

            </nav>
          </div>
        </header>

  );
}
