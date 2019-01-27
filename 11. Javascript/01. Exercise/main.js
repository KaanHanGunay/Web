var database = [
    {
        username: "andrei",
        password: "123"
    },
    {
        username: "saaly",
        password: "123"
    },
    {
        username: "ingrid",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired"
    },
    {
        username: "Sally",
        timeline: "JS is cool"
    }
];

var userNamePrompt = prompt("User Name?");
var passwordPrompt = prompt("Password?");

function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsFeed);
    } else {
        console.log("Wrong!");
    }
}

signIn(userNamePrompt, passwordPrompt);

