//*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    var img = document.getElementById("image");
    var URL = previewPic.getAttribute("src");
    console.log(typeof URL);
    img.style.backgroundImage = "url("+URL+")";
    img.textContent = previewPic.getAttribute("alt");
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */
    var img = document.getElementById("image");
    img.style.backgroundImage = "";
    img.textContent = "Hover over an image below to display here.";
}   


