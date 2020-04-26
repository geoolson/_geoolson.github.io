window.onload = () => {
    const projectLink = document.getElementsByClassName("nav-links")[2];
    const dropdown = projectLink.children[0].children[0];
    projectLink.onclick = () => dropdown.style.display = dropdown.style.display !== "block" ? "block": "none";
}