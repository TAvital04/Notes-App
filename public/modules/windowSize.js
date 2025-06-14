function broadcastWindowSize() {
    const width = window.innerWidth;

    const resizeEvent = new CustomEvent("windowSizeChange", {detail: {width}});

    window.dispatchEvent(resizeEvent);
}

window.addEventListener("resize", broadcastWindowSize);