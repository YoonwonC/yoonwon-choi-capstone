import "./Header.scss";
import logo from "../../assets/Logo/budgetme-transparent.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header__container">
        <Link className="header__logo" to={"/"}>
          <img className="header__logo-img" src={logo} alt="BudgetMe Logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
