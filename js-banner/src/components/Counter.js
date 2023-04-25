let counter = 1;

function createCounter() {
  const counterContainer = document.createElement("div");
  const count = document.createElement("h2");
  const incButton = document.createElement("button");
  const dcrButton = document.createElement("button");

  // add classes and ID
  counterContainer.classList.add("counter");
  count.id = "countValue"; // helps to identify the element on page

  // add inner text elements

  count.innerText = `count: ${counter}`;
  incButton.innerText = "+";
  dcrButton.innerText = "-";
  // add event listeners
  incButton.onclick = () => {
    counter = counter + 1;
    updateCount();
  };

  dcrButton.addEventListener("click", () => {
    counter = counter - 1;
    updateCount();
  });

  // add all elements to counterContainer
  counterContainer.appendChild(count);
  counterContainer.appendChild(incButton);
  counterContainer.appendChild(dcrButton);

  return counterContainer;
}

function updateCount() {
  const displayCount = document.getElementById("countValue");
  displayCount.innerText = `Count: ${counter}`;
}

export { createCounter };
