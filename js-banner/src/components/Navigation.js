// create navigation bar and logo

// create logo
const logo =
  "https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/bltc1a71705f49d391d/5de663548d1dce6ad6bed8bf/header-logo.svg?format=pjpg&width=220";

function createLogo() {
  const logoContainer = document.createElement("div");
  const logoImage = document.createElement("img");

  logoImage.src = logo;
  // adding class to container
  logoContainer.classList.add("logo");
  // adding images to logo
  logoContainer.appendChild(logoImage);

  return logoContainer;
}

function createNavigationBar() {
  const links = ["Blog", "Careers", "Our Work", "Contact"];
  const navbarContainer = document.createElement("div");
  const navLinks = document.createElement("ul");

  // add classes
  navbarContainer.classList.add("nav-bar");
  navLinks.classList.add("nav-links", "flex");

  // add links
  links.forEach((link) => {
    const navList = document.createElement("li");
    const navLink = document.createElement("a");

    navLink.innerText = link;
    navLink.href = "#";

    // add class
    navList.classList.add("nav-item");
    navLink.classList.add("nav-link");
    navList.appendChild(navLink);

    navLinks.appendChild(navList);
  });

  navbarContainer.appendChild(navLinks);
  return navbarContainer;
}

function createNavigation() {
  const navContainer = document.createElement("nav");
  navContainer.classList.add("navigation", "flex");

  // adding logo
  navContainer.appendChild(createLogo());
  navContainer.appendChild(createNavigationBar());
  return navContainer;
}

export { createNavigation };
