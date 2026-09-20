import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate("/search")
  };

  const handleMyListClick = (e) => {
    e.preventDefault();
    navigate("/mylist")
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">My App</div>

      <nav className="sidebar-nav">
        <a
          href=""
          className={`nav-item ${location.pathname === "/search" && "active"}`}
          data-page="search"
          onClick={handleSearchClick}
        >
          <span className="nav-icon">⌕</span>
          <span>Search</span>
        </a>

        <a
          href=""
          className={`nav-item ${location.pathname === "/mylist" && "active"}`}
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
