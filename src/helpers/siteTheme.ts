export const checkCurrentTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const iconsTheme = document.querySelectorAll('#iconTheme');
    document.body.setAttribute('data-theme', currentTheme);


    if (!currentTheme) {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        iconsTheme.forEach(icon => {
            icon?.setAttribute('src', '/svg/moon-icon.svg');
        });
    }


    if (currentTheme === 'dark') {
        iconsTheme.forEach(icon => {
            icon?.setAttribute('src', '/svg/sun-icon.svg');
        });
    } else {
        iconsTheme.forEach(icon => {
            icon?.setAttribute('src', '/svg/moon-icon.svg');
        });
    }

};


export const changeTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const iconsTheme = document.querySelectorAll('#iconTheme');

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        iconsTheme.forEach(icon => {
            icon?.setAttribute('src', '/svg/moon-icon.svg');
        });
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        iconsTheme.forEach(icon => {

            icon?.setAttribute('src', '/svg/sun-icon.svg');
        });
        localStorage.setItem('theme', 'dark');
    }
};

export const allAboutTheme = () => {
    // check if the user has a saved theme preference
    checkCurrentTheme();

    const themesButton = document.querySelectorAll("#themeButton");
    if (themesButton) {
        themesButton.forEach(themeButton => {
            themeButton.addEventListener("click", () => {
                //   import("../helpers/siteTheme").then((module) => {
                //     module.changeTheme();
                //     module.changeHeroImageTheme();
                //   });
                changeTheme();
            });

        });
    }
};
