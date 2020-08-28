function merge() {
  var ret = {};
  for (var i in arguments) {
    var m = arguments[i];
    for (var j in m) ret[j] = m[j];
  }
  return ret;
}

console.log('1');
console.log(merge({ a: 123 }, { b: 456 }));


// eslint-disable-next-line
var a = 123;
// var b = 456;
