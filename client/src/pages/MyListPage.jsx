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
        alert(err.message);
      }
    };

    getMyList();
  }, []);

  const refreshList = async () => {
    try {
      if (refreshingState === "refreshing") return;
      setRefreshingState("refreshing");

      const response = await axios.get("http://localhost:3000/api/v1/refresh");

      setMyList([]);

      localStorage.setItem("last-update", Date.now());

      setMyList(response.data.products);
    } catch (err) {
      alert(err.message);
    } finally {
      setRefreshingState("not-refresh");
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
                {localStorage.getItem("last-update")
                  ? `${new Date(
                      Number(localStorage.getItem("last-update")),
                    ).toLocaleDateString("en-US", {
                      timeZone: "Asia/Tehran",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })} at ${new Date(
                      Number(localStorage.getItem("last-update")),
                    ).toLocaleTimeString("en-US", {
                      timeZone: "Asia/Tehran",
                      minute: "2-digit",
                      hour: "2-digit",
                    })}`
                  : "no update yet"}
              </span>
            </div>

            <button className="btn btn-refresh" onClick={refreshList}>
              {refreshingState === "not-refresh"
                ? "↻ Refresh"
                : "Refreshing ..."}
            </button>
          </header>

          <Products products={myList} />
        </div>
      </main>
    </div>
  );
}

export default MyListPage;
