var courses = [{
id:1,name:'PHP',price:175
},{
id:2,name:'JS',price:175
},{
id:3,name:'Java',price:175
},{
id:4,name:'C++',price:175
}]

function courseHandler(course,index){
    return  {
        id:course.id,
        name:`Khoa Hoc: ${course.name}`,
        price: course.price,
        GiaTien: `Gia tien la: ${course.price}`,
        index: index,
    }
}
// map
var newCourses =courses.map(courseHandler);
console.log(newCourses)
console.log(`================`)
//forEach
courses.forEach(function(course,index){
    console.log(index,course);
})
console.log(`================`)
// every
var isFree = courses.every(function(course,index){
    return course.price >10 ;
})
console.log(isFree)
// some nguoc lai vs every 
//find --- tra 1 phan tu 
var courseFree =courses.find(function(course,index){
    return course.name='JS'
})
console.log(courseFree)
//filter tra ve ---1 mo phan tu 

//reduce 
var i=0;

function sumPrice(accumulator,currentValue,currentIndex,OrriginArray){
    i++;
    // console.log(i,accumulator,currentValue,currentIndex,OrriginArray)
    console.table({
        'Luot chay ': i,  
        'Bien luu tru': accumulator        
    })
    return accumulator +currentValue.price ;
};

 function sumOfPrice (accumulator,currentValue){
return accumulator+currentValue.price;
}

var totalPrice = courses.reduce(sumOfPrice,0);
console.log(totalPrice)

var finalSum = courses.reduce((a,b)=>a+b.price,0);
console.log(finalSum)

var numbers = [100,200,300,400]
var totalNumber = numbers.reduce((a,b)=>a+b,0)
console.log(totalNumber)