//async.js


function blue(){
    
}

async function red(){
    let url='https://jsonplaceholder.typicode.com/users/';  
    let data=await fetch(url);
    console.log(data);
}
red();


//destruct.js




let obj={
    a:1,
    b:2,
    c:3,
    d:4
    
}
let err=['bobby','vicky','rina','purav'];


let [a1,a2,...rest]=arr;
console.log(a1);
console.log(rest);
let [junior,skyler]=arr;

console.log(junior,skylar);


({a:x,b,w:w1=7}=obj);
console.log(x,b,w1);


//ES6 method shorthand in object 

function dresses(favouritedress,commondress){
    return{
        favouritedress,
        commondress
    };
    
    }
var mydress =dresses('red','blue');
console.log(mydress);