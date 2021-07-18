function addItemToCart() {
    // name price amount
    console.log("add item");
    let name = document.getElementById("name-input");
    let price = 10;
    
  }
  
  function deleteItem() {
    console.log("delete this item");
  }
  
  function showCart() {
    console.log("show items in cart");
  }
  
  function main() {
    const addItemBtn = document.getElementById("add-item-btn");
    addItemBtn.addEventListener("click", addItemToCart);
  }
  
  main();
  