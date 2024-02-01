import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-70 rounded-full "
      >
        <IoIosArrowBack size={20} />
      </button>
      <button
        onClick={() => navigate(1)}
        className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-70 rounded-full "
      >
        <IoIosArrowForward size={20} />
      </button>
    </nav>
  );
}

export default Navigation;
