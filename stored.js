

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
  function btnLogOut() {
    localStorage.clear();
    location.reload();
}

