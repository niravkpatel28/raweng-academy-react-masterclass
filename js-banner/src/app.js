import { createBanner } from "./components/Banner.js";
import { createNavigation } from "./components/Navigation.js";

console.log(createNavigation());

document.body.appendChild(createNavigation());
document.body.appendChild(createBanner());
