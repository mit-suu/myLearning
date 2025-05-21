//number
const a = [1, 2, 3, 4, 5]

//add
var newArr = a.reduce((acc,curr) =>{
    acc.push(curr)
    if(curr===2) acc.push(7)
        return acc
},[])
console.log(newArr) 

//remove
var newArr = a.reduce((acc,curr) =>{
    acc.push(curr)
    if(curr===2) acc.pop(curr)
        return acc
},[])
console.log(newArr)

//String
const anfruits = ["Apple", "Banana", "Mango"];

//push 2 ben
anfruits.push('Orange')
anfruits.unshift('Pineapple')
console.log(anfruits)

// add strw vao index 2
var newfruits= anfruits.reduce((acc,curr,index)=>{
acc.push(curr)
    if(index===2) acc.push('Strawberry')
        return acc
},[]);
console.log(newfruits)  

// thay mango thanh fruits
console.log(newfruits.map(fruit => fruit === "Mango" ? "Peach" : fruit)) 

//remove index 1 
console.log(newfruits.reduce((acc,curr,i)=>{
acc.push(curr)
if(i===0) acc.pop(curr)
return acc
},[]))
//Remove apple
console.log(newfruits.reduce((acc,curr)=>{
acc.push(curr)
if(curr==='Apple') acc.pop(curr)
return acc
},[]))

const offruits = [
{ id:1, name:"Apple", color:"Red"},
{ id:2, name:"Banana", color:"Yellow"},
{ id:3, name:"Mango", color:"Orange"}
];

//add kiwi
offruits.push( {id: 4, name: 'Kiwi', color: 'Green'})
console.log(offruits)

//map de lay phan tu trong fruits ra 
function fruitsHandler(fruit){
return fruit;
}
console.log(offruits.map(fruitsHandler))

//sai map de update
function fruitsHandlerUpdate(fruit,index){
if (fruit.id===2) {
    return {
        id: fruit.id,
        name :`Greenish Yellow`,
        color:fruit.color
    }
}
return fruit
}
console.log(offruits.map(fruitsHandlerUpdate))

console.log(offruits.reduce((acc,curr)=>{
acc.push(curr)
    if(curr.id===1) acc.pop(curr)
        return acc
},[]))

//filter ra mango
console.log(offruits.filter(fruit => fruit.name ==='Mango' ))

