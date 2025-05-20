var courses = [{
id:1,name:'PHP',price:175
},{
id:2,name:'JS',price:175
},{
id:3,name:'Java',price:175
},{
id:4,name:'C++',price:175
}]

function courseHandler(course){
    return course;
}

var newCourses =courses.map(courseHandler);
console.log(newCourses)