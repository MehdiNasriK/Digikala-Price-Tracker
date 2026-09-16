import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Sidebar({ setProducts }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate("/search")
  };

  const handleMyListClick = async (e) => {
    e.preventDefault();
    if (location.pathname === "/mylist") return
    navigate("/mylist")

    const response = await axios.get("http://localhost:3000/api/v1/mylist")
    console.log(response.data.products)
    setProducts(response.data.products)
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
