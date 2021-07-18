function addItemToCart() {
    // name price amount
    console.log("add item");
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