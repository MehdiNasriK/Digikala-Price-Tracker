import { useState } from "react";

function Sidebar() {
  const [navState, setNavState] = useState("search");

  const handleSearchClick = (e) => {
    e.preventDefault();
    setNavState("search");
  };

  const handleMyListClick = (e) => {
    e.preventDefault();
    setNavState("my-list");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">My App</div>

      <nav className="sidebar-nav">
        <a
          href="index.html"
          className={`nav-item ${navState === "search" && "active"}`}
          data-page="search"
          onClick={handleSearchClick}
        >
          <span className="nav-icon">⌕</span>
          <span>Search</span>
        </a>

        <a
          href="mylist.html"
          className={`nav-item ${navState === "my-list" && "active"}`}
          data-page="my-list"
          onClick={handleMyListClick}
        >
          <span className="nav-icon">♡</span>
          <span>My List</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
