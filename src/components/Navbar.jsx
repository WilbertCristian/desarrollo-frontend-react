import { Link } from "react-router-dom";
import { React } from "react";


const Navbar = (formData) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/default">Default</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/login">LoginForm</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
