import { Menu } from "@headlessui/react";
import { IoCaretDownSharp } from "react-icons/io5";
import { RxExternalLink } from "react-icons/rx";

function Auth() {
  const user = {
    name: "Ugur Arslan",
    avatar: "https://i.pravatar.cc/150?img=5",
  };

  return (
    <Menu as={"nav"} className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`h-8 flex items-center ${
              open ? "bg-active" : "bg-black"
            } rounded-3xl  pr-2 hover:bg-active`}
          >
            <img
              src={user.avatar}
              className="h-8 w-8 rounded-full  mr-2 p-0.5  "
            />
            <span className="text-sm font-semibold mr-2"> {user.name} </span>
            <span className={open && "rotate-180"}>
              <IoCaretDownSharp size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full right-0 w-36 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-8 flex justify-between items-center px-3  text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Account
                  <span>
                    <RxExternalLink size={16} />
                  </span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-8 flex items-center px-3  text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-8 flex items-center px-3  text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
