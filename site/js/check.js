check = "0"
notice = document.getElementById('notice');
function checkHow() {
    if (check === "1") {
        notice.style.display = "none";
        check = "0";
        return;
    } else {
        notice.style.display = "block";
        check = "1";
    }
}