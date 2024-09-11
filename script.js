const tabButtons = document.querySelectorAll(".tab-button");

tabButtons.forEach(function (tabButton) {
    tabButton.addEventListener("click", function (event) {
        const rel = event.target.getAttribute("data-rel")
        console.log(rel)

        document.querySelectorAll(".tab-content").forEach(function (a) {
            // a.style.display = "none";
            // a.classList.add("tab-content-close")
            a.classList.remove("open")
        });
        // document.getElementById(rel).style.display = 'flex';
        // document.getElementById(rel).style.flexDirection = 'column';
        document.getElementById(rel).classList.add("open")
    });
});
