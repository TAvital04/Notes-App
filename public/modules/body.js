const body = document.body;

function renderResize(width) {
    if(width < 900) {
        body.style.marginLeft = "10%";
        body.style.marginRight = "10%";
    } else {
        body.style.marginLeft = "25%";
        body.style.marginRight = "25%";
    }
}

renderResize(window.innerWidth);

window.addEventListener("windowSizeChange", (e) => {
    renderResize(e.detail.width);
});