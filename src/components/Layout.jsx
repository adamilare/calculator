import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/calculator.css';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
