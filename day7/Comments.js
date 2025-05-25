var comments = [
  { user_id: 1, cmt: "xin chao" },
  { user_id: 2, cmt: "chao cc" },
  { user_id: 3, cmt: "mat day vc" },
];

var users = [
  { name: "tuan hiep", user_id: 1 },
  { name: "linh quan", user_id: 2 },
  { name: "quang trieu", user_id: 3 },
];

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var results = users.filter(function (user) {
      return userIds.includes(user.user_id);
    });
    resolve(results);
  });
}

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });

    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users, // dùng key là "users"
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comments-block");
    var html = "";

    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.user_id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.cmt}</li>`;
    });

    commentBlock.innerHTML = html;
  });
