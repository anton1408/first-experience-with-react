import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Users list</Link>
        </li>
        <li>
          <Link to="/user-page">User page</Link>
        </li>
        <li>
          <Link to="/edit">Create/edit user</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
