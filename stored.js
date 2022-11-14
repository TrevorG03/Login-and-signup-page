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
  
      lsOutput.innerHTML += `${key}`;
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
  function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }




// var inputArray = [];
// var size = 1; //Maximum Array size

// for(var i=0; i<size; i++) {
	
// 	//Taking Input from user
// 	inputArray[i] = prompt('Enter Username ' + (i+1));
// }

// //Print the array in the console.
// console.log(inputArray);

// var inputArray = [];
// var size = 1; //Maximum Array size

// for(var i=0; i<size; i++) {
	
// 	//Taking Input from user
// 	inputArray[i] = prompt('Enter Password ' + (i+1));
// }

// //Print the array in the console.
// console.log(inputArray);



// var titles = [];
// var names = [];
// var tickets = [];


// var titleInput = document.getElementById("title");
// var nameInput = document.getElementById("name");
// var ticketInput = document.getElementById("tickets");

// var messageBox = document.getElementById("display");

// function insert() {
//   titles.push(titleInput.value);
//   names.push(nameInput.value);
//   tickets.push(ticketInput.value);

//   clearAndShow();
// }

// function clearAndShow() {
//   titleInput.value = "";
//   nameInput.value = "";
//   ticketInput.value = "";

//   messageBox.innerHTML = "";

//   messageBox.innerHTML += "Titles: " + titles.join(", ") + "<br/>";
//   messageBox.innerHTML += "Names: " + names.join(", ") + "<br/>";
//   messageBox.innerHTML += "Tickets: " + tickets.join(", ") + "<br/>";
// }


// function username() {
//     let userInput = document.querySelector("#userInput");
//     let message = document.querySelector("#message");

//     message.innerHTML = "Welcome to myMcDonald's, " + userInput.value + "!";

// }
// function password() {
//   let passwordInput = document.querySelector("#passwordInput");
//   let message = document.querySelector("#message");

//   message.innerHTML = "Welcome to myMcDonald's, " + passwordInput.value + "!";

//   var x = document.getElementById("passwordInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

