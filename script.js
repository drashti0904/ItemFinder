document.getElementById("MyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get input field values
  var itemName = document.getElementById("itemName").value;
  var itemDescription = document.getElementById("itemDescription").value;
  var itemType;

  // Determine the selected item type
  var objectRadio = document.getElementById("object");
  var containerRadio = document.getElementById("container");
  if (objectRadio.checked) {
    itemType = objectRadio.value;
  } else if (containerRadio.checked) {
    itemType = containerRadio.value;
  }

  // Do something with the values (for example, log them to console)
  console.log("Item Name:", itemName);
  console.log("Item Description:", itemDescription);
  console.log("Item Type:", itemType);
});
