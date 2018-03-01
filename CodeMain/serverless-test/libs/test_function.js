export function test(body) {
  var turnNb = 0;
  var divider = 3;
  var to_return = 20;
  for(var i = 0; to_return < 340; i++) {
    to_return += to_return * divider;
    turnNb++
    console.log(turnNb)
    console.log(to_return)
  }
  return turnNb
}
