/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ling Wang
 *      Student ID: 125753228
 *      Date:       12 Aug 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Here, we create arrays of descriptions for men, women and children snekers respectively
let MenArr = [];
let WomenArr = [];
let ChildrenArr = [];

for (let i = 0; i < products.length; i++) {
  products[i].categories.forEach(function (element) {
      if (element === "SNK-Home" && products[i].discontinued === false) {
      MenArr.push(products[i].description);
      } else if (element === "SNK-Condo" && products[i].discontinued === false) {
      WomenArr.push(products[i].description);
      } else if (element === "SNK-Townhouse" && products[i].discontinued === false) {
      ChildrenArr.push(products[i].description);
    }
  });
}

// Creating the navbar dynamically
let menu = document.getElementById("menu");
for (let i = 0; i < categories.length; i++) {
  let newMenuItem = document.createElement("button");
  newMenuItem.textContent = categories[i].name;
  newMenuItem.id = categories[i].name;
  menu.appendChild(newMenuItem);
}

// Prints the description of product
function descriptionPrinter(category) {
  // Whenever the user clicks on an element, the program prints the description of the product to the console
  let tableRows = document.getElementsByClassName("tbl-row");

  // Using the length as per the category and printing description by using the parallel array concept
  if (category === "SNK-Home") {
    for (let i = 0; i < MenArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(MenArr[i]);
      });
    }
  } else if (category === "SNK-Condo") {
    for (let i = 0; i < WomenArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(WomenArr[i]);
      });
    }
  } else if (category === "SNK-Townhouse") {
    for (let i = 0; i < ChildrenArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(ChildrenArr[i]);
      });
    }
  }
}

// Creates all the cells for a particular category
function createCells(category) {
  // Fetching the tbody element
  var tbodyRef = document.getElementById("categoryProducts");
  var newRow, newCell, newText;

  // Iterating through the products and creating rows
  for (let i = 0; i < products.length; i++) {
    // creates a table row
    document.createElement("tr");

    // Iterating over array
    products[i].categories.forEach(function (element) {
      if (element === category && products[i].discontinued === false) {
        newRow = tbodyRef.insertRow();
        newRow.className = "tbl-row";

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(products[i].title);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        newCell.id = i;
        // Append a text node to the cell
        newText = document.createTextNode(products[i].description);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(
          (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })
        ); // Converting to Canadian Currency
        newCell.appendChild(newText);
      }
    });
  }
}

// Display men sneakers by default
//document.getElementById("categoryProducts").innerHTML = "";
//document.getElementById("selected-category").textContent = "Home";
//createCells("SNK-Home");

// Function that shows a product list based on category and update the heading
function showProductList(category) {
  // Clearing all the elements so that they dont stay
  document.getElementById("categoryProducts").innerHTML = "";

  // Changing the human readable names to IDs
  for (let k = 0; k < categories.length; k++) {
    if (categories[k].name === category) {
      category = categories[k].id;
    }
  }

  // Creating cells for categories
  createCells(category);
  descriptionPrinter(category);
}

// Change the heading and show product list
let menuArr = document.querySelector("#menu").querySelectorAll("button");
for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].addEventListener("click", function () {
    document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
    showProductList(menuArr[i].textContent);
  });
}

// As the default category is men, we call the function by passing 'men' as the category
descriptionPrinter("SNK-Home");
