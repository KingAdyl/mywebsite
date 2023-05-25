// input field, submit button, sort button, item list from the HTML document
const inputItem = document.getElementById('inputItem');
const submitBtn = document.getElementById('submitBtn');
const sortBtn = document.getElementById('sortBtn');
const itemList = document.getElementById('itemList');
const deleteBtn = document.getElementById('deleteBtn');

// Event listeners to the submit and sort buttons when clicked
submitBtn.addEventListener('click', addItem);
sortBtn.addEventListener('click', sortList);
deleteBtn.addEventListener('click', clearList);

// Function
function addItem() {
  // Value of input field
  const itemValue = inputItem.value.trim();
  
  // Checks if empty
  if (itemValue.length > 0) {
    // New list item element 
    const li = document.createElement('li');
    li.textContent = itemValue;
    // Add list item to the list
    itemList.appendChild(li);
    // Clear the field
    inputItem.value = '';
  }
}

// Function sort list clicked
function sortList() {
  // Convert list item elements
  const itemsArray = Array.from(itemList.children);
  // Sort list item elements by text 
  itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

  // Remove list item 
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Sorted list
  itemsArray.forEach(item => {
    itemList.appendChild(item);
  });
}

