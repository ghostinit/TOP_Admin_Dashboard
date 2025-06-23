function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

document.querySelector('.toggle-theme-btn').addEventListener('click', setTheme);

const menuItems = document.querySelectorAll(".menu-item");

Array.from(menuItems).forEach((element) => {
    element.addEventListener('click', (event) => {
        const p = event.currentTarget.querySelector("p.menu-text");
        const link = p.dataset.mlink;
        console.log(link);
    })
});


