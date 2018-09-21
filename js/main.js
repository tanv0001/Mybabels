'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

//async.js


function bob() {}

async function fred() {
    var url = 'https://jsonplaceholder.typicode.com/users/';
    var data = await fetch(url);
    console.log(data);
}
fred();

//destruct.js


var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4

};
var err = ['bob', 'tina', 'rina', 'linda'];

//let a1=arr[0];
//let a1=arr[0];

var _arr = arr,
    _arr2 = _toArray(_arr),
    a1 = _arr2[0],
    a2 = _arr2[1],
    rest = _arr2.slice(2);

console.log(a1);
console.log(rest);

var _arr3 = arr,
    _arr4 = _slicedToArray(_arr3, 2),
    jody = _arr4[0],
    junior = _arr4[1];

console.log(jody, junior);

//({a,b}=obj);
//console.log(a,d);

x = obj.a;
b = obj.b;
var _obj$w = obj.w;
w1 = _obj$w === undefined ? 7 : _obj$w;

console.log(x, b, w1);