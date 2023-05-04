console.log("Running todos.js")

const fs = require("fs")

//add todo 
var addTodo = (title) => {
    var todos = fetchTodos()
    var todo = {
        title
    }

    var duplicateTodos = todos.filter(todo => todo.title === title)
    
    if(duplicateTodos.length === 0) {
        todos.push(todo)
        saveTodos(todos)
        console.log("Todo added:", todo.title)
        return todo
    } else {
        console.log("Todo already exists!")
    }
}

//delete todo
var deleteTodo = (title) => {
    var todos = fetchTodos()
    var filtredTodos = todos.filter(todo => todo.title !== title)
    saveTodos(filtredTodos)

    return todos.length !== filtredTodos.length
}

//read todo
var readTodo = (title) => {
    var todos = fetchTodos()
    var filtredTodos = todos.filter(todo => todo.title === title)
    return filtredTodos[0]
}

//list todos
var listTodos = () => {
    return fetchTodos()
}

//fetch todos
var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync("todos-data.json")
        return JSON.parse(todosString)
    } catch (error) {
      return []  
    }
}

//save todos
var saveTodos = (todos) => {
    fs.writeFileSync("todos-data.json", JSON.stringify(todos))
}

//log todo
var logTodo = (todo) => {
    console.log("----------------------")
    console.log("Todo:", todo.title)
}

module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    logTodo,
    listTodos
}