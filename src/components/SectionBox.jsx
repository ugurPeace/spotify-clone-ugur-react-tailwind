import { NavLink } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5";

function SectionBox({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more}>
          <h3 className="text-xl text-white font-semibold tracking-tight hover:underline">
            {title}
          </h3>
        </NavLink>

        {more && (
          <NavLink
            to={more}
            className={
              "text-xs hover:text-white font-semibold uppercase text-link tracking-widest "
            }
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink
            to="/"
            key={item.id}
            className={"bg-footer rounded p-4  hover:bg-active group"}
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={`${
                  item.type === "artist" ? "rounded-full" : "rounded"
                }  absolute inset-0 w-full h-full  object-cover`}
              />
              <button className="w-10 h-10 group-hover:flex  rounded-full bg-primary absolute bottom-2 right-2 hidden items-center justify-center group-focus:flex focus:flex  ">
                <span className="pl-0.5">
                  <IoPlaySharp />
                </span>
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold ">
              {item.title}
            </h6>
            <p className="line-clamp-1 text-link text-sm mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default SectionBox;
