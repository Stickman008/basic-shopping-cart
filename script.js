var firebaseConfig = {
  apiKey: "AIzaSyDZ1Z2R6ItJc9i8949fZKAlvZYHqMnkA2c",
  authDomain: "basic-shopping-cart-6cb5f.firebaseapp.com",
  projectId: "basic-shopping-cart-6cb5f",
  storageBucket: "basic-shopping-cart-6cb5f.appspot.com",
  messagingSenderId: "1026973504116",
  appId: "1:1026973504116:web:1dc20927030307d9eaf721",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addItemToCart() {
  // name price amount
  console.log("add item");
  let name = document.getElementById("name-input").value;
  let price = document.getElementById("price-input").value;
  let amount = document.getElementById("amount-input").value;

  if (name === null || name === "" || price < 0 || amount <= 0) return 0;

  db.collection("cart")
    .add({
      name: name,
      price: price,
      amount: amount,
    })
    .then((docRef) => {
      console.log("ID: ", docRef.id);
      renderAllItems();
    })
    .then((error) => {
      console.log("Error: ", error);
    });
}

function deleteItem(id) {
  db.collection("cart")
    .doc(id)
    .delete()
    .then(() => {
      let cartRow = document.getElementById("id_" + id);
      cartRow.remove();
    });
}

function renderItem(id, name, price, amount) {
  let cart = document.getElementsByClassName("show-items-body")[0];

  let cartRow = document.createElement("tr");
  let itemName = document.createElement("td");
  let itemPrice = document.createElement("td");
  let itemAmount = document.createElement("td");
  let deleteBtn = document.createElement("button");

  cartRow.setAttribute("scope", "row");
  cartRow.setAttribute("id", "id_" + id);

  itemName.setAttribute("class", "item-name");
  itemPrice.setAttribute("class", "item-price");
  itemAmount.setAttribute("class", "item-amount");
  deleteBtn.setAttribute("class", "btn delete-btn");

  itemName.setAttribute("scope", "col");
  itemPrice.setAttribute("scope", "col");
  itemAmount.setAttribute("scope", "col");
  deleteBtn.setAttribute("scope", "col");

  itemName.innerHTML = name;
  itemPrice.innerHTML = price;
  itemAmount.innerHTML = amount;

  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => deleteItem(id));

  cartRow.appendChild(itemName);
  cartRow.appendChild(itemPrice);
  cartRow.appendChild(itemAmount);
  cartRow.appendChild(deleteBtn);

  cart.appendChild(cartRow);
}

function renderAllItems() {
  let cart = document.getElementsByClassName("show-items-body")[0];
  cart.innerHTML = "";

  db.collection("cart")
    .orderBy("name")
    .get()
    .then((querySanpshot) => {
      querySanpshot.forEach((doc) => {
        let data = doc.data();
        renderItem(doc.id, data.name, data.price, data.amount);
      });
    });
}

function main() {
  const addItemBtn = document.getElementById("add-item-btn");
  addItemBtn.addEventListener("click", addItemToCart);
  renderAllItems();
}

main();
