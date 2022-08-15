import Catcontainer from "./components/categories/categories-container";
import { getCategories } from "./data/db_categories";
import { Outlet, NavLink } from "react-router-dom";
import './App.css';

const App = () => {

  let categories = getCategories();

  return (
    <div>
      <div className='header'>
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/">Home</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/invoices">Invoices</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/expenses">Expenses</NavLink>
      </div>

      <div className='pagetitle'>
        <h1>AIDOO ONLINE STORE</h1>
      </div>

      <Outlet />

      <Catcontainer categories = {categories} />
        
    </div>
  );
}

export default App;
