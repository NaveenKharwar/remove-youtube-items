// Function to blur the elements
function blurElements(elements) {
	elements.forEach(div => {
	  div.style.filter = 'blur(5px)';
	  div.style.pointerEvents = 'none';
	});
  }

  // Observe changes in the DOM
  const observer = new MutationObserver(mutations => {
	const targetElements = document.querySelectorAll('ytd-rich-item-renderer.style-scope.ytd-rich-grid-row');

	const elvishYadavElements = Array.from(targetElements).filter(element => {
	  return element.textContent.includes('Elvish Yadav');
	});

	blurElements(elvishYadavElements);
  });

  // Start observing the document
  observer.observe(document, { childList: true, subtree: true });

  // Apply the blur initially
  const initialElvishYadavElements = Array.from(document.querySelectorAll('ytd-rich-item-renderer.style-scope.ytd-rich-grid-row')).filter(element => {
	return element.textContent.includes('Elvish Yadav');
  });

  blurElements(initialElvishYadavElements);
