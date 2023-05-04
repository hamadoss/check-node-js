console.log("Running app.js")

const fs = require("fs")
const yargs = require("yargs")

const todos = require("./todos.js")

const args = yargs.argv
const command = args._[0]
const title = args.title

console.log("You ran the command: ", command)

if(command === "addTodo") {
    todos.addTodo(title)
} else if (command === "deleteTodo") {
  var todoDeleted = todos.deleteTodo(title)
  var message = todoDeleted ? "Todo was deleted." : "Todo not found!"
  console.log(message)
} else if (command === "readTodo") {
    var todo = todos.readTodo(title)
    if (todo) {
        console.log("Todo was found")
        todos.logTodo(todo)
    } else {
        console.log("Todo not found!")
    }
} else if (command === "listTodos") {
    var allTodos = todos.listTodos()
    console.log(`Printing ${allTodos.length} todo(s)`)
    allTodos.forEach(todo => todos.logTodo(todo));
} else {
    console.log("Invalid command!")
}

