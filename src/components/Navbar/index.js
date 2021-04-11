import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.container}>
      <nav>
        <ul className={s.navbar}>
          <li className={s.li}>
            <Link to="/counter">Counter</Link>
          </li>
          <li className={s.li}>
            <Link to="/userlist">User List</Link>
          </li>
          <li className={s.li}>
            <Link to="/todolistpage">TodoListPage List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
