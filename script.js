var firebaseConfig = {
  apiKey: "AIzaSyDZ1Z2R6ItJc9i8949fZKAlvZYHqMnkA2c",
  authDomain: "basic-shopping-cart-6cb5f.firebaseapp.com",
  projectId: "basic-shopping-cart-6cb5f",
  storageBucket: "basic-shopping-cart-6cb5f.appspot.com",
  messagingSenderId: "1026973504116",
  appId: "1:1026973504116:web:1dc20927030307d9eaf721"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addItemToCart() {
// name price amount
console.log("add item");
let name = "testName";
let price = 10;
let amount = 10;
db.collection("cart").add({
  name: name,
  price: price,
  amount: amount
}).then((docRef) => {
  console.log("ID: ", docRef.id);
}).then((error) => {
  console.log("Error: ", error);
});
}

function deleteItem() {
console.log("delete this item");
}

function renderItem(name, price, amount) {
console.log("show items in cart");
+
}

function main() {
const addItemBtn = document.getElementById("add-item-btn");
addItemBtn.addEventListener("click", addItemToCart);
}

main();
