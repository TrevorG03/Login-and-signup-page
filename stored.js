// function createUser(Username) {
//     var user = document.getElementById("Username");
//     users.push(user);
// }

// function getUser(Username,) {
//     return users.find(eachUser => {
//         return eachUser.Username === Username && eachUser.password === password;
//     })
// }

// function createUser(username, password) {
//   var user = {username, password};
//   users.push(user);
// }

// function getUser(username, password) {
//   return users.find(eachUser => {
//       return eachUser.username === username && eachUser.password === password;
//   })
// }

// var users = [];
// console.log(users)

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  var inputKey = document.getElementById("inputKey");
  var inputValue = document.getElementById("inputValue");
  
  var btnInsert = document.getElementById("btnInsert");
  var lsOutput = document.getElementById("lsOutput");
  
  btnInsert.onclick = function() {
      var key = inputKey.value;
      var value = inputValue.value;
  
      if (key && value) {
          localStorage.setItem(key, value);
          location.reload();
      }
  };
  
  for (let i=0; i<localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
  
      lsOutput.innerHTML += `${key}: ${value}<br/>`;
  };
  
  var removeKey = document.getElementById("removeKey");
  var removeValue = document.getElementById("removeValue");
  
  var btnRemove = document.getElementById("btnRemove");
  
  btnRemove.onclick = function() {
      var x = removeKey.value;
      var y = removeValue.value;
  
      if (x && y) {
          localStorage.removeItem(x, y);
          location.reload();
      }
  };