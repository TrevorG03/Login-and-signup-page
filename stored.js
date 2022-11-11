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