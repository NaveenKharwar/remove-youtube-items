// Remove <ytd-rich-item-renderer> elements containing "Elvish Yadav"
const richItemRenderers = document.querySelectorAll('ytd-rich-item-renderer');

richItemRenderers.forEach(element => {
  const content = element.textContent || element.innerText;
  if (content.includes('Elvish Yadav')) {
    element.remove();
  }
});
