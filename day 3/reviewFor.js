const course ={
    Name: "JavaScript",
    Price: 0,
    Description:"Hoc Lap Trinh",
}

var languages =[
'JS',
'Java',
'Html'
]


result = course.Price > 0 ? `Gia la ${course.Price} dong`:`free`
console.log(result)
for (var key in course){
    console.log(course[key])
}

for (var key in languages){
    console.log(languages[key])
}

