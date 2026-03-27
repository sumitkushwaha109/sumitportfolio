function copyText(id, btn) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);

    const original = btn.innerText;
    btn.innerText = "Copied ✓";
    btn.classList.add("copied");

    setTimeout(() => {
        btn.innerText = original;
        btn.classList.remove("copied");
    }, 1500);
}

(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        document.querySelector(".theme-toggle").textContent = "☀️";
    }
})();