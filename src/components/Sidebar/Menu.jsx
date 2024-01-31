import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            activeClassName="bg-active"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 focus:bg-active active:bg-active rounded transition-all "
          >
            <span>
              <AiFillHome size={24} />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white active:bg-active rounded px-4  transition-all focus:bg-active "
          >
            <span>
              <IoSearch size={24} />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white  px-4  active:bg-active rounded focus:bg-active transition-all "
          >
            <span>
              <BiLibrary size={24} />
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
