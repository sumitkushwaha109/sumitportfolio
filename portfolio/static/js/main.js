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

function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.querySelector(".theme-toggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

// Load saved theme
(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        document.querySelector(".theme-toggle").textContent = "☀️";
    }
})();