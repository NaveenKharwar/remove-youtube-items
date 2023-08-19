
let filter_btn = document.getElementById("filter")

let filter_item = "Elvish Yadav"

filter_btn.addEventListener("click", () => {
  let filter_text = document.getElementById("filter_text").value;
  filter_item = filter_text;
})

function hideElements(elements) {
  elements.forEach((element) => {
    // Customize the style to hide elements
    element.style.display = "none";
  });
}

// Observe changes in the DOM
const observer = new MutationObserver((mutations) => {
  const targetElements = document.querySelectorAll(
    "ytd-rich-item-renderer.style-scope.ytd-rich-grid-row"
  );

  const filteredElements = Array.from(targetElements).filter((element) => {
    // Customize the condition to filter elements
    return element.textContent.includes(filter_item);
  });

  hideElements(filteredElements);
});

// Start observing the document
observer.observe(document, { childList: true, subtree: true });

// Apply the hiding initially
const initialElements = Array.from(
  document.querySelectorAll(
    "ytd-rich-item-renderer.style-scope.ytd-rich-grid-row"
  )
).filter((element) => {
  // Customize the condition for initial filtering
  return element.textContent.includes(filter_item);
});

hideElements(initialElements);
