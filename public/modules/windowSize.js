const notebook = document.querySelector(".notebook");
const log = document.querySelector(".log");

function renderResize(width) {
    if(notebook) {
        if(width < 1000) {
            notebook.style.marginLeft = "10%";
            notebook.style.marginRight = "10%";
        } else {
            notebook.style.marginLeft = "25%";
            notebook.style.marginRight = "25%";
        }
    } else if(log) {
        if(width < 1000) {
            log.style.marginLeft = "20%";
            log.style.marginRight = "20%";
        } else {
            log.style.marginLeft = "40%";
            log.style.marginRight = "40%";
        }
    }
}

renderResize(window.innerWidth);

window.addEventListener("resize", () => {
    renderResize(window.innerWidth);
});