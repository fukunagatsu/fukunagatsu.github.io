document.addEventListener("DOMContentLoaded", function () {
    // ヘッダーを読み込む
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-container").innerHTML = data);

    // サイドバーを読み込む
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data);
});
