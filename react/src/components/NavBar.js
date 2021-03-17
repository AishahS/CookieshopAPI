// Styling
import { ThemeButton, Logo, NavProduct } from "../styles";
import imgPath from "../logo.jpg";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <img src={imgPath}></img>
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavProduct to="/products" activeClassName="active">
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
