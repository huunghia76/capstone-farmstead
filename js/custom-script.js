function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
setInterval(function () {//lặp lại
    // 500 là tọa độ tính từ nút khi lăng xuống
    if (window.pageYOffset < 80) {
        document.getElementById('back-to-top').style.display = "none";
        document.getElementById('nav_header').classList.remove("nav-header-fixed");
    } else {
        document.getElementById('back-to-top').style.display = "block";
        document.getElementById('nav_header').classList.add("nav-header-fixed");
    }
}, 200)
