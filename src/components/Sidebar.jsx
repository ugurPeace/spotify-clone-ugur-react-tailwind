import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import Playlists from "./Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
import { FaPlus } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} />
      </a>
      <Menu />
      <nav className="mt-6 px-2">
        <ul className="flex flex-col gap-y-1">
          <li>
            <a
              href="#"
              className="h-6 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 focus:bg-active active:bg-active rounded bg-opacity-60 transition-all "
            >
              <span>
                <FaPlus />
              </span>
              Create Playlist
            </a>
          </li>
          <li>
            <a
              href="#"
              className="h-6 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 focus:bg-active active:bg-active rounded bg-opacity-60 transition-all  "
            >
              <span>
                <IoIosHeart />
              </span>
              Liked Songs
            </a>
          </li>
        </ul>
      </nav>
      <Playlists />
      <DownloadApp />
    </aside>
  );
}

export default Sidebar;
