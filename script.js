console.log('Todo list app');

// The arry that will hold the todo list items

let todoItems = [];

// this function will create a new todo object based on the text that was entered in the text input field
// and push it into the `todoItems` array

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoItems.push(todo);
    console.log(todoItems);
}

// Then, select the form element from html

const form = document.querySelector('.js-form');
// Add a submit event listener

form.addEventListener('submit', event => {
    // On form submission, prevent page refresh
    event.preventDefault();
    // Select the text input from the form
    const input = document.querySelector('.js-todo-input');
    // Get the input value and remove whitespace

    const text = input.value.trim();
    if(text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});