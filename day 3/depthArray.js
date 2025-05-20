//Flat -lam phang mang
var depthArray =[1,2,[3,4],5,6,[7,8]]
var flatArray = depthArray.reduce(function(flatOutput,depthItem){
return flatOutput.concat(depthItem)
},[])
// console.log(flatArray)

var topics =[
    {
        topic:'Front-End',
        course:[
            {
                id:1,
                title:'HTML, CSS'
            },{
                id:2,
                title:'ReactJS'
            }
        ]
    },{
        topic:'Back-End',
        course:[
            {
                id:1,
                title:'Node JS'
            },{
                id:1,
                title:'Stringboot'
            }
        ]
    }
]

var newCourses = topics.reduce(function(courses,topic){
return courses.concat(topic.course)
},[])
console.log(newCourses)

var htmls= newCourses.map(function(course){
return `
<div>
    <h2>ID: ${course.id}</h2>
    <h2>${course.title}</h2>

</div>
`
})

document.getElementById("course-list").innerHTML = htmls.join('');