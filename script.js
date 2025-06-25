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
    'Choom or No Choom',
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


// Announcement Cards
const announcements = ['Site Maintenance',
    'Annual CyberCon',
    'Safety Bulletin',
    'Community Guidelines']

const announceContainer = document.querySelector(".announce-card-container");

for (let i = 0; i < announcements.length; i++) {
    const title = announcements[i];
    let announceCard = `
    <div class="announce-card">
        <h4>${title}</h4>
        <div class="announce-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum, diam a commodo lacinia, lectus nisl luctus metus, non rhoncus
            justo mi at arcu.
        </div>
    `
    if ((i + 1) < announcements.length) {
        announceCard += `
            <div class="announce-card-divider"></div>
        </div>`;
    } else {
        announceCard += `</div>`;
    }
    announceContainer.insertAdjacentHTML("beforeend", announceCard);
}

// Trending cards
const trendingContainer = document.querySelector(".trending-card-container");

const users = ['@rebelmasterson', '@sarahnomercy', '@gustav', '@adamsmasher'];
const avatars = ['punk1.png', 'robot1.png', 'punk2.png', 'robot2.png'];
const names = [`Don't Be a Gonk!`, 'Freeze Dried Fixers', 'How to Pickle a Corpo', 'RipperDoc Vetting 101'];

for (let i = 0; i < 4; i++) {
    const trendingCard = `
    <div class="trending-card">
        <div class="trending-avatar" style="background-image: url('images/avatars/${avatars[i]}')"></div>
        <div class="trending-user">${users[i]}</div>
        <div class="trending-title">${names[i]}</div>
    </div>
    `
    trendingContainer.insertAdjacentHTML("beforeend", trendingCard);
}

const highlightPicker = document.querySelector("#highlight-picker");
highlightPicker.value = "#00d6d6";

function alterColor(hex, percent) {
    const amt = Math.round(2.55 * percent);
    return hex.replace(/[\da-f]{2}/gi, c =>
        ("0" + Math.max(0, Math.min(255, parseInt(c, 16) - amt)).toString(16)).slice(-2)
    );
}

highlightPicker.addEventListener('input', (event) => {
    const newColor = event.target.value;
    const btnLighter = alterColor(newColor, -10);
    const btnDarker = alterColor(newColor, 10);
    document.documentElement.style.setProperty('--color-highlight', newColor);
    document.documentElement.style.setProperty('--color-btn-bg-active', btnDarker);
    document.documentElement.style.setProperty('--color-btn-bg-hover', btnLighter);
});

// const newColor = darkenHex("00d6d6", 10); // returns something like "00bfbf"
