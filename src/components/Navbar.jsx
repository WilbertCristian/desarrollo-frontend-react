import { Link } from "react-router-dom";
import { React } from "react";
import { useSelector } from "react-redux";


const Navbar = (formData) => {
  const form= useSelector(state => state.form);
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
        <ul className="left-nav" >
          <li className="user">Bienvenido: {form.formData.username}</li> 
          <li className="email">{form.formData.email}</li> 
        </ul> 


      </ul>
    </nav>
  );
};

export default Navbar;
