function Playlists() {
  return (
    <nav className="mx-6 py-2  mt-2 border-t border-white border-opacity-10 flex-auto overflow-auto ">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              Song Name...
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Playlists;
