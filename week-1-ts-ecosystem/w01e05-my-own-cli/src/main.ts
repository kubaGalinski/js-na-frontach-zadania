/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

import { Product } from "./modules/product/product.module";
import { ShoppingCart } from "./modules/cart/cart.module";
import inquirer from 'inquirer';
import Table from 'cli-table'

// const Products = Array<Product>
const cart1 = new ShoppingCart("first cart", "PLN", "Kup Teraz");
const product1 = new Product("telewizor", 2, 23,"Kup Teraz");
const mleko = new Product("mleko uht", 2, 3,"Kup Teraz", 2);
const product2 = new Product("chleb", 2, 13,"Aukcja" ,3);
const product3 = new Product("cukier",2, 9991, "Kup Teraz", 4);
const fs = require('fs');
const path = require('node:path');
const cartItemsPath = path.resolve(__dirname, '../persistent-data/cart-items.json');

let rawData = fs.readFileSync(cartItemsPath);
let cartItems = JSON.parse(rawData);

// console.log(Object.getOwnPropertyNames(new Product))
// const questions = [
//     {
//       type: 'list',
//       name: 'productType',
//       message: 'Jaki produkt chcesz dodać??',
//       choices: [
//         {
//           key: 'b',
//           name: 'Kup Teraz',
//           value: 'buyNow',
//         },
//         {
//           key: 'f',
//           name: 'Za darmo',
//           value: 'forFree',
//         },
//         {
//           key: 'a',
//           name: 'Aukcja',
//           value: 'auction',
//         },
//       ],
//     },
//     {
//       type: 'confirm',
//       name: 'isFictionalData',
//       message: "Czy wygenerować produkt z danymi fikcyjnymi?",
//       default: false,
//     },
//     {
//         type: 'input',
//         name: 'title',
//         message: 'Podaj nazwę produktu?',
//         // default: 'Nope, all good!',
//       },
//     {
//       type: 'input',
//       name: 'quantity',
//       message: 'Podaj ilość:',
//       validate(value: string) {
//         const valid = !isNaN(parseFloat(value));
//         return valid || 'Please enter a number';
//       },
//       filter: Number,
//     },
//     {
//         type: 'input',
//         name: 'price',
//         message: 'Podaj cene jednostkowa:',
//         validate(value: string) {
//           const valid = !isNaN(parseFloat(value));
//           return valid || 'Please enter a number';
//         },
//         filter: Number,
//       }
//   ];
  
//   inquirer.prompt(questions).then((product) => {
//     console.log('Added product:');
//     const table = new Table({
//         head: Object.keys(product).filter(key => key !== 'isFictionalData'),
//     })
//     const row = Object.keys(product).map(val=> val.toString()).filter(key => key !== 'isFictionalData')

//     console.log(row)
//     table.push(Object.keys(product).map(val=> val.toString()).filter(key => key !== 'isFictionalData'))
//     console.log(table.toString());

//     console.log(JSON.stringify(product, null, '  '));
//   });
const product = product1
const table = new Table({
    head: Object.keys(product).filter(key => key !== 'isFictionalData'),
})
const row = Object.values(product).map(val=> val.toString()).filter(key => key !== 'isFictionalData')

console.log(row)
table.push(Object.values(product).map(val=> val.toString()).filter(key => key !== 'isFictionalData'))
console.log(table.toString());

console.log(JSON.stringify(product, null, '  '));




const addItemToDatabase = function(product:Product) {
    cartItems[product.type].push(product);
    const dataToWrite = JSON.stringify(cartItems)
    fs.writeFileSync(dataToWrite)

}

// cart1.addProduct(product1);
// cart1.addProduct(mleko);
// cart1.removeProduct(mleko);
// cart1.addProduct(product2);
// cart1.addProduct(product3);
// cart1.updateProduct(new Product("jaja", 4, 3,"Kup Teraz" , 1 ));
// cart1.displayAllProducts();
// cart1.displayTotalPrice();

