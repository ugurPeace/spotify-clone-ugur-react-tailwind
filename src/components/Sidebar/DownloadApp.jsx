import { FaRegArrowAltCircleDown } from "react-icons/fa";

function DownloadApp() {
  return (
    <a
      href="#"
      className="h-10 flex text-sm text-link hover:text-white font-semibold gap-x-4 items-center px-6 flex-shrink-0 "
    >
      <span>
        <FaRegArrowAltCircleDown size={22} />
      </span>
      Install App
    </a>
  );
}

export default DownloadApp;
