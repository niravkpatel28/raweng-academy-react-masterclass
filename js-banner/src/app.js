import { createBanner } from "./components/Banner.js";
import { createNavigation } from "./components/Navigation.js";
import { createCounter } from "./components/Counter.js";

console.log(createNavigation());

document.body.appendChild(createNavigation());
// document.body.appendChild(createBanner());
document.body.appendChild(createCounter());
