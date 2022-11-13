function createUser(username, password) {
    var user = {username, password};
    users.push(user);
}

function getUser(username, password) {
    return users.find(eachUser => {
        return eachUser.username === username && eachUser.password === password;
    })
}

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

