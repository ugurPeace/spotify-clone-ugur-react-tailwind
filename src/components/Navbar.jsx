import { useMatch } from "react-router-dom";

import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";

function Navbar() {
  const url = useMatch("search");

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {url && <div>aaa</div>}
      <Auth />
    </nav>
  );
}

export default Navbar;
