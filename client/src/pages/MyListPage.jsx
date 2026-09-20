import Products from "../component/Products";
import Sidebar from "../component/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function MyListPage() {
  const [myList, setMyList] = useState([]);
  const [refreshingState, setRefreshingState] = useState("not-refresh");

  useEffect(() => {
    const getMyList = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/mylist");
        setMyList(response.data.products);
      } catch (err) {
        alert(err.message)
      }
    };

    getMyList();
  }, []);

  const refreshList = async () => {
    try {
      if (refreshingState === "refreshing") return;
      setRefreshingState("refreshing");
      setMyList([]);

      const response = await axios.get("http://localhost:3000/api/v1/refresh");

      localStorage.setItem("last-update", Date.now());
      const op = localStorage.getItem("last-update");
      setMyList(response.data.products);
      setRefreshingState("not-refresh");
    } catch (err) {
      alert(err.message)
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <div className="page">
          <header className="page-header my-list-header">
            <div>
              <h1>My List</h1>

              <span className="last-update">
                Last updated:{" "}
                {new Date(
                  Number(localStorage.getItem("last-update")),
                ).toLocaleDateString("en-US", {
                  timeZone: "Asia/Tehran",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                at{" "}
                {new Date(
                  Number(localStorage.getItem("last-update")),
                ).toLocaleTimeString("en-US", {
                  timeZone: "Asia/Tehran",
                  minute: "2-digit",
                  hour: "2-digit",
                })}
              </span>
            </div>

            <button className="btn btn-refresh" onClick={refreshList}>
              {refreshingState === "not-refresh" ? "↻ Refresh" : "..."}
            </button>
          </header>

          <Products products={myList} />
        </div>
      </main>
    </div>
  );
}

export default MyListPage;
