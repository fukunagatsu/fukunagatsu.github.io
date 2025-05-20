document.addEventListener("DOMContentLoaded", function () {
    // ヘッダーを読み込む
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-container").innerHTML = data);

    // ナビを読み込む
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-container").innerHTML = data;
            
            // ハンバーガーメニュー機能の追加
            const toggle = document.getElementById("menu-toggle");
            const navList = document.getElementById("nav-list");
            
            if (toggle && navList) {
                toggle.addEventListener("click", () => {
                    navList.classList.toggle("show");
                });
            }
        });
});
