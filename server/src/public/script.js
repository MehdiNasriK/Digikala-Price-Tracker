// =========================
// Elements
// =========================

const app = document.querySelector(".app");
const mainContent = document.querySelector(".main-content");

const searchForm = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box input");
const searchResults = document.querySelector(".products-list");

const sidebar = document.querySelector(".sidebar")
const searchNav = document.querySelector('[data-page="search"]');
const myListNav = document.querySelector('[data-page="my-list"]');


// =========================
// My List Page
// =========================

const myListPage = document.createElement("div");

myListPage.classList.add("page");

myListPage.innerHTML = `
    <header class="page-header my-list-header">

        <div>
            <h1>My List</h1>

            <span class="last-update">
                Last updated: Sep 8, 2026 at 12:15 PM
            </span>
        </div>

        <button class="btn btn-refresh">
            ↻ Refresh
        </button>

    </header>

    <section class="products-section">

        <div class="products-header">
            <h2>Saved Products</h2>
            <span class="results-count">0 products</span>
        </div>

        <div class="products-list my-list-products">
        </div>

    </section>
`;


// =========================
// My List Elements
// =========================

const refreshButton = myListPage.querySelector(".btn-refresh");
const myListProducts = myListPage.querySelector(".my-list-products");
const myListCount = myListPage.querySelector(".results-count");
const lastUpdate = myListPage.querySelector(".last-update");


// =========================
// Event Listeners
// =========================


// Navigation
sidebar.addEventListener("click", (event) => {
    const navItem = event.target.closest(".nav-item")
    if (!navItem) return

    event.preventDefault()

    const page = navItem.dataset.page

    sidebar.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active")
    })

    navItem.classList.add("active")

    if (page === "search") {
        //TODO: show search page
    }

    if (page === "my-list") {
        //TODO: show my-list page
    }
})


// Search
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("ooo")

    // TODO: Your Search handler
});


// Add To My List - Event Delegation
searchResults.addEventListener("click", (event) => {

    if (!event.target.classList.contains("btn-add")) {
        return;
    }

    // TODO: Your Add To My List handler

});


// Delete From My List - Event Delegation
myListProducts.addEventListener("click", (event) => {

    if (!event.target.classList.contains("btn-delete")) {
        return;
    }

    // TODO: Your Delete handler

});


// Refresh My List
refreshButton.addEventListener("click", (event) => {

    // TODO: Your Refresh handler

});