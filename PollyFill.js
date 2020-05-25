function myMultiply(ele) {
if(typeof ele === "string") return ele;
else return ele * 100
}

function isAString(ele) {
return typeof ele === "string"
}

Array.prototype.myMap = function(func, mythis){
  let newArray = [];
  let newEle;
  
  for(i of this){
  	newEle = func.call(mythis, i, this)
    
    newArray.push(newEle)
  } 
  return newArray;
}

Array.prototype.myFilter = function(fn, mythis) {
  const newArray = [];
  for(i of this){
    if ( fn(i) ) newArray.push(i)
  }
  return newArray;
}

Array.prototype.myReduce = function(callback, initialValue){
let accumulator = initialValue === undefined ? null : initialValue;
for(let ele = 0; ele<this.length; ele++){
		accumulator = callback.call(this, accumulator, this[ele])
	}
  return accumulator
}

const a = ['a','b',4,5]
console.log( a.myMap(myMultiply, this) )
console.log(a.myFilter(isAString, this ))
console.log(a.myReduce(( (a,b) => a+b) , 5) );
