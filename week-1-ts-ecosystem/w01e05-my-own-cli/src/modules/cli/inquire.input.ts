
// import Table from "cli-table";

export const questions = [
  {
    type: "list",
    name: "productType",
    message: "Jaki produkt chcesz dodać??",
    choices: [
      {
        key: "b",
        name: "Kup Teraz",
        value: "buyNow",
      },
      {
        key: "f",
        name: "Za darmo",
        value: "forFree",
      },
      {
        key: "a",
        name: "Aukcja",
        value: "auction",
      },
    ],
  },
  {
    type: "confirm",
    name: "isFictionalData",
    message: "Czy wygenerować produkt z danymi fikcyjnymi?",
    default: false,
  },
  {
    type: "input",
    name: "title",
    message: "Podaj nazwę produktu",
  },
  {
    type: "input",
    name: "quantity",
    message: "Podaj ilość:",
    validate(value: string) {
      const valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
  },
  {
    type: "input",
    name: "price",
    message: "Podaj cene jednostkowa:",
    validate(value: string) {
      const valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
  },
];

// export const cliPrompt = inquirer.prompt(questions)
// .then((product) => {
//   console.log("Added product:");
//   const table = new Table({
//     head: Object.keys(product).filter((key) => key !== "isFictionalData"),
//   });
//   const row = Object.values(product)
//     .map((value) => value.toString())
//     .filter((key) => key !== "isFictionalData");

//   console.log(row);
//   table.push(
//     Object.keys(product)
//       .map((val) => val.toString())
//       .filter((key) => key !== "isFictionalData")
//   );
//   console.log(table.toString());

//   console.log(JSON.stringify(product, null, "  "));
// });
