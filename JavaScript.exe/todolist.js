var x = document.getElementsByTagName("li")

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", function () {
        this.style.color = "green";
    })
    x[i].addEventListener("click", function () {
        this.style.setProperty("text-decoration", "line-through");

    })
    x[i].addEventListener("mouseout", function () {
        if (this.style.getPropertyValue("text-decoration") == "line-through") {
            this.style.color = "green";
        }
        else {
            this.style.color = "black";
        }
        }


    )
}
