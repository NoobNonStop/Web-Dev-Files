function getVal() {
    var x1 = document.getElementById("email");
    var x2 = document.getElementById("re-email");

    if (x1.value !== x2.value) {
        x1.value = '';
        x2.value = '';
        alert("The repeated email address did not match the initial email address.");
        return false;
    }
    return true;

}