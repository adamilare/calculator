import { NavLink } from 'react-router-dom';
import styles from '../css/NavBar.module.css';

const NavBar = () => (
  <div className={`clas ${styles.navbar}`}>
    <span className={styles['nav-left']}>Math Magician</span>
    <div className={styles['nav-right']}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/quote">Quote</NavLink>
    </div>
  </div>
);

export default NavBar;
