const inventory1 = [
  { id: 1, name: "Laptop", price: 700, category: "Electronics", quantity: 5 },
  { id: 2, name: "Mouse", price: 15, category: "Accessories", quantity: 20 },
  { id: 3, name: "Keyboard", price: 30, category: "Accessories", quantity: 12 },
  { id: 4, name: "Monitor", price: 200, category: "Electronics", quantity: 7 },
  { id: 5, name: "Desk", price: 150, category: "Furniture", quantity: 3 },
  { id: 6, name: "Chair", price: 90, category: "Furniture", quantity: 8 }
];
const inventory2 = [
  { id: 7, name: "Phone", price: 400, category: "Electronics", quantity: 6 },
  { id: 8, name: "Cable", price: 10, category: "Accessories", quantity: 30 },
  { id: 9, name: "Tablet", price: 250, category: "Electronics", quantity: 4 },
  { id: 10, name: "Lamp", price: 25, category: "Furniture", quantity: 9 }
];
const inventory = inventory1.concat(inventory2);
const categories = [...new Set(inventory.map(product => product.category))];
console.log("Electronics available:", categories.includes("Electronics"));
const discontinuedIndex = inventory.findIndex(product => product.id === 8);
if (discontinuedIndex !== -1) inventory.splice(discontinuedIndex, 1);
inventory.sort((a, b) => a.price - b.price);
console.log("First five:", inventory.slice(0, 5));
console.log("Inventory:", inventory);
