console.log(name);
var name = "Jone";
function test() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(y);
  console.log(x);
}
test();
function fixedTest() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(y);
  }
  console.log(x);
}
fixedTest();
