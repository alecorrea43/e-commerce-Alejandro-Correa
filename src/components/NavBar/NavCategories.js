import { NavLink } from "react-router-dom";
import "./NavCategories.css";

const activeStyle = {
  color: "blue",
};

function NavCategories() {
  return (
    <div className="categories">
      <p>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          All
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/category/chairs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Chairs
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/category/tables"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Tables
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/category/desks"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Desks
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/category/shelfs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Shelfs
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/category/beds"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Beds
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/category/closets"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Closets
        </NavLink>
      </p>
    </div>
  );
}

export default NavCategories;
