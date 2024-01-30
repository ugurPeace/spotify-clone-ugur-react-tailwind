import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-white hover:text-white px-4 bg-active rounded"
          >
            <span className="px-4">
              <AiFillHome size={24} />
            </span>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white  px-4 rounded"
          >
            <span className="px-4">
              <IoSearch size={24} />
            </span>
            Search
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white  px-4 rounded "
          >
            <span className="px-4">
              <BiLibrary size={24} />
            </span>
            Your Library
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
