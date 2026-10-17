const product = { id: 1, name: "Laptop", price: 650, category: "Electronics", available: true };
const json = JSON.stringify(product);
const converted = JSON.parse(json);
console.log("Original:", product);
console.log("JSON:", json);
console.log("Converted:", converted);
try {
  JSON.parse('{"id":1,}');
} catch (error) {
  console.log("Invalid JSON:", error.message);
}
