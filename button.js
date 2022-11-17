var btn = {
    style: "main"
};

document.getElementById("btn").addEventListener("click", changeCSS);

function changeCSS() {

    let style = document.getElementById("currentStyle");

    if(style.getAttribute("href") == "main.css") {
        style.setAttribute("href", "alternate.css");
        btn.style = "alternate";
    }
    else {
        style.setAttribute("href", "main.css");
        btn.style = "main";
    }
}