
import { Product } from "./modules/product/product.module";
import { ShoppingCart } from "./modules/cart/cart.module";
import inquirer from "inquirer";
import { questions } from "./modules/cli/inquire.input";
import Table from "cli-table";
// const Products = Array<Product>
import { faker } from '@faker-js/faker';
import { createFakeArray } from "./modules/product/product.generator.module";
import { toNamespacedPath } from "path";

const fs = require("fs");
const path = require("node:path");

const cartItemsPath = path.resolve(
  __dirname,
  "../persistent-data/cart-items.json"
);
const cart1 = new ShoppingCart("first cart", "PLN", "Kup Teraz");
const product1 = new Product("telewizor", 2, 23, "Kup Teraz");





let rawData = fs.readFileSync(cartItemsPath);
let cartItems = JSON.parse(rawData);

// const cliPrompt = inquirer.prompt(questions).then((product:any) => {
//   console.log("Added product:");
//   delete product.isFictionalData
//   const table = new Table({
//     head: Object.keys(product).filter((key) => key !== "isFictionalData"),
//   });

//   const row = Object.values(product)
//     .map((value) => value.toString())
//     .filter((val) => val !== "isFictionalData");

//   console.log(row);
//   table.push(
//     Object.keys(product)
//       .map((val) => val.toString())
//       .filter((key) => key !== "isFictionalData")
//   );
//   console.log(table.toString());

//   console.log(JSON.stringify(product, null, "  "));
// });
const product = product1
const arrayOfFakeProducts = createFakeArray("Kup Teraz",10)
console.log(arrayOfFakeProducts)

// const table = new Table({
//     head: Object.keys(product).filter((key) => key !== "isFictionalData"),
//   });
const rows = arrayOfFakeProducts.map(product => Object.values(product))
// for( const item in rows) {
//     table.push(item)
// }
// console.log(rows)
//   const row = Object.values(arrayOfFakeProducts)
//     .map((value) => value.toString())
//     .filter((val) => val !== "isFictionalData");

//   console.log(row);

// table.push(arrayOfFakeProducts)
//   table.push(
//     Object.keys(product)
//       .map((val) => val.toString())
//       .filter((key) => key !== "isFictionalData")
//   );
// table.push(rows)
const table = new Table({
    head: Object.keys(product).filter((key) => key !== "isFictionalData"),
   rows
  })
  console.log(table.toString());

  console.log(JSON.stringify(product, null, "  "));



const addItemToDatabase = function (product: Product) {
  cartItems[product.type].push(product);
  const dataToWrite = JSON.stringify(cartItems);
  fs.writeFileSync(dataToWrite);
};
