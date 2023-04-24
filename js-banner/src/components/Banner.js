function createBannerText() {
  const bannerTextContainer = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  // add text
  h2.innerText = "Fast Track Innovation";
  p.innerText = `Raw Engineering’s experienced Product Strategists , Solutions
          Architects, Designers, and Developers turn Business Vision into
          Digital Reality`;

  // add classes
  bannerTextContainer.classList.add("banner-text");
  bannerTextContainer.appendChild(h2);
  bannerTextContainer.appendChild(p);
  return bannerTextContainer;
}

function createBannerImage() {
  const bannerImageContainer = document.createElement("div");
  const image = document.createElement("img");

  // add classes
  bannerImageContainer.classList.add("banner-image");

  // add image source
  image.src =
    "https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt7fa63094fe70efee/6040b958fef76d094c7017bb/Landing_Page-optim.jpeg?format=pjpg&width=540";
  bannerImageContainer.appendChild(image);

  return bannerImageContainer;
}

function createBanner() {
  const banner = document.createElement("div");
  banner.classList.add("banner", "flex");
  banner.appendChild(createBannerText());
  banner.appendChild(createBannerImage());

  return banner;
}

export { createBanner };
