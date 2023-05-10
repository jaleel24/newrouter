import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
function MainNavigation() {
  // Replaced Link with NavLink which basically helps in making the link active
  // since it provides className in which we need to call a function and by destructring we get
  // get an object isActive from it and manupilate it as per our needs
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive})=> isActive ? classes.active : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({isActive})=>isActive ? classes.active : undefined
            }>Proucts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
