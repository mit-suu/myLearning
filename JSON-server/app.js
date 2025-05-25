var courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourse);
  handleCreateForm();
}

start();

//function
function getCourses(callback) {
  fetch(courseApi)
    .then(function (res) {
      return res.json();
    })
    .then(callback);
}

function renderCourse(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
    <li class="course-item-${course.id}">
<h4> ${course.title}</h4>
<p>${course.description}</p>
 <button onclick="handleDeleteCourse('${course.id}')">Xoá</button>
    </li>
    `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var creatBtn = document.querySelector("#create");
  creatBtn.onclick = function () {
    var title = document.querySelector('input[name="title"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var data = {
      title: title,
      description: description,
    };
    createCourse(data, function () {
      getCourses(renderCourse);
    });
  };
}

function handleDeleteCourse(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(courseApi + "/" + id, options)
    .then(function (res) {
      return res.json();
    })
    .then(function () {
      deleteCourse = document.querySelector(".course-item" + id);
      if (deleteCourse) {
        deleteCourse.remove();
      }
    });
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (res) {
      return res.json();
    })
    .then(callback);
}
