function createUser(Username) {
    var user = document.getElementById("Username");
    users.push(user);
}

function getUser(Username,) {
    return users.find(eachUser => {
        return eachUser.Username === Username && eachUser.password === password;
    })
}

// function createUser(username, password) {
//   var user = {username, password};
//   users.push(user);
// }

// function getUser(username, password) {
//   return users.find(eachUser => {
//       return eachUser.username === username && eachUser.password === password;
//   })
// }

var users = [];
console.log(users)

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }