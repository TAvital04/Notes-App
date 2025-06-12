document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".flash-message .close-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
        });
    });
});