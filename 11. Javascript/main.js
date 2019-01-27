function sayHello() {
    console.log('Hello');
}

var sayBye = function(){
    console.log('Bye');
}

var multiply = function (a, b) {
    return a * b;
}

var user = {
    name: "John",
    age:34,
    hobby: 'Soccer',
    isMarried: false,
    shout: function(){
        console.log("Test");
    }
};

var todos = [
    "clean",
    "brush",
    "exercise"
];

for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

var i = 0;
while (i < todos.length) {
    todos[i] = todos[i] + "!";
    i++;
}

var i = 0;
do {
    todos[i] = todos[i] + "!";
    i++;
} while (i < todos.length);

todos.forEach(element => {
    element = element + "!";
    console.log(element);
});

todos.forEach(function (i) {
    console.log(i);
});