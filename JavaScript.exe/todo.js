var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.style.color = "green";
    });
    
    lis[i].addEventListener("click", function () {
        this.style.setProperty("text-decoration", "line-through");
        this.style.color = "green";
    });

    lis[i].addEventListener("mouseout", function () {
        var x = (lis[i].style.getProperty("text-decoration") == "line-through");
        if (x === true) {
        lis[i].style.color = "black";
        }
        else {
            lis[i].style.color = "green";
        }
    });

   
    
}




