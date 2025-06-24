function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

document.querySelector('.toggle-theme-button').addEventListener('click', setTheme);

const menuItems = document.querySelectorAll(".menu-item");

Array.from(menuItems).forEach((element) => {
    element.addEventListener('click', (event) => {
        const p = event.currentTarget.querySelector("p.menu-text");
        const link = p.dataset.mlink;
        console.log(link);
    })
});


// Project cards

const cardTitles = ['Open Source Rebellion',
    'Free Swag',
    'GNU Mayhem',
    'Reverse Osmosis',
    'Diary of a Netrunner',
    'How to Pickle a Corpo',
    'Finding a Solid Fixer',
    'In Case of Flatline...',
    'Braindance or Quit',
    'Mod My Cyberdeck',
    'Those Are My Eddies']



const pCardContainer = document.querySelector(".project-card-container");

cardTitles.forEach((title) => {
    const cardHTML = `
<div class="project-card">
    <div class="project-card-highlight"></div>
    <div class="project-card-content">
        <h3 class="project-card-title">${title}</h3>
        <div class="project-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum, diam a commodo lacinia, lectus nisl luctus metus, non rhoncus
            justo mi at arcu. Sed bibendum est elementum, aliquet felis quis, maximus magna. Quisque
            id ullamcorper risus, vel pharetra lorem.
        </div>
        <div class="project-card-options">
            <div></div>
            <button type="button" class="project-card-btn pCard-fav-btn"></button>
            <button type="button" class="project-card-btn pCard-follow-btn"></button>
            <button type="button" class="project-card-btn pCard-share-btn"></button>
            <div></div>
        </div>
    </div>
</div>
`

    pCardContainer.insertAdjacentHTML("beforeend", cardHTML);
});