const items = [
    {
        title: 'Using Abstract',
        description: 'Abstract lets you manage, version, and document your designs in one place.',
        imageUrl: "//theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
    },
    {
        title: 'Manage your account',
        description: 'Configure your account settings, such as your email, profile details, and password.',
        imageUrl: "//theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png"
    },
    {
        title: 'Manage organizations, teams, and projects',
        description: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
        imageUrl: "//theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
    },
    {
        title: 'Manage billing',
        description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
        imageUrl: "//theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
    },
    {
        title: 'Authenticate to Abstract',
        description: 'Abstract lets you manage, version, and document your designs in one place.',
        imageUrl: "//theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
    },
    {
        title: 'Abstract support',
        description: 'Get in touch with a human.',
        imageUrl: "//theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
    },




]



/* The code is adding an event listener to the `menuButton` element. When the button is clicked, it
toggles the class `bg-light-dark` on the `nav` element, toggles the class `d-none` on the `dropdown`
element, and toggles the classes `d-none` and `change` on the `menuButton` element. This code is
responsible for toggling the visibility and styling of the dropdown menu when the menu button is
clicked. */

const menuButton = document.getElementById('menu-button');
const dropdown = document.getElementById('dropdown');
const nav = document.querySelector('.navbar');


menuButton.addEventListener('click', function () {
    nav.classList.toggle('bg-light-dark');
    dropdown.classList.toggle('d-none');
    menuButton.classList.toggle('d-none');
    menuButton.classList.toggle('change');
});

const itemsContainer = document.getElementById('items-container');

/* The code is creating HTML markup for each item in the `items` array using the `map` method. It
iterates over each item and creates a string of HTML code that represents the item's image, title,
description, and a "Learn More" link. */

const itemsHtml = items.map((item) => {
    return `
    <div class="item-container">
        <img src="${item.imageUrl}" alt="${item.title}">
        <div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href="#" class="fs-500">Learn More →</a>
        </div>
    </div>
    `
})

const itemsHTMLString = itemsHtml.join('');

itemsContainer.innerHTML = itemsHTMLString;


/* This code is responsible for implementing a search functionality on the webpage. */

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('search-button');

searchInput.addEventListener('input', function () {
    const searchText = searchInput.value;
    const filteredServices = filterServices(searchText);
    showFilteredServices(filteredServices);
});

searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    const searchText = searchInput.value;
    const filteredServices = filterServices(searchText);
    showFilteredServices(filteredServices);

})


/**
 * The code defines two functions, `filterServices` and `showFilteredServices`, that filter and display
 * a list of services based on a search text.
 * @param searchText - The `searchText` parameter is a string that represents the text that the user
 * wants to search for in the services.
 * @returns The `filterServices` function returns an array of services that match the search text. The
 * `showFilteredServices` function does not return anything, but it updates the HTML content of the
 * `itemsContainer` element with the filtered services.
 */

const filterServices = (searchText) => {
    return items.filter(sevice => {
        return sevice.title.toLowerCase().includes(searchText.toLowerCase());
    })
}

const showFilteredServices = (filteredServices) => {
    let itemsHTMLString = '';
    itemsContainer.innerHTML = '';
    filteredServices.forEach(item => {
        itemsHTMLString += `
        <div class="item-container">
            <img src="${item.imageUrl}" alt="${item.title}">
            <div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <a href="#" class="fs-500">Learn More →</a>
            </div>
        </div>
        `
    })


        ;
    itemsContainer.innerHTML = itemsHTMLString;
}

