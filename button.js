document.getElementById("btn").addEventListener("click", changeCSS);

function changeCSS() {

    let style = document.getElementById("currentStyle");

    if(style.getAttribute("href") == "main.css") {
        style.setAttribute("href", "alternate.css");
    }
    else {
        style.setAttribute("href", "main.css");
    }
}