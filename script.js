function fetchTodos() {
	fetch('http://localhost:3000/todos')
		.then(resp => resp.json())
		.then(renderTodos);
}

const todoCollection = document.querySelector('.todo-collection');

function renderTodos(todos) {
	todoCollection.innerHTML = '';

	todos.forEach(function (todo) {
		todoCollection.innerHTML += `
			<div class="card" data-id="${todo.id}">
				<h2>${todo.title}</h2>
				<button class="btn btn-edit">edit</button>
				<button class="btn btn-delete">Delete</button>
			</di>
		`;
	});
}

const addTodoForm = document.querySelector('.add-todo-form');

addTodoForm.addEventListener('submit', function (event) {
	event.preventDefault();

	fetch('http://localhost:3000/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id: Math.floor(Math.random() * Math.floor(10000)),
			title: `${event.target.todo.value}`,
			completed: false
		}),
	})
		.then(resp => resp.json())
		.then(renderTodos)
		.catch(err => console.log(err))
});

fetchTodos();

// DOM selectors
// const todoGroup = document.querySelector('.todo-group');
// const userInput = document.querySelector('.user-input');
// const postButton = document.querySelector('.btn-submit');

// // Event listeners
// postButton.addEventListener('click', createTodo);

// let todoArray = [];

// window.onload = async function () {
// 	const fetchUrl = 'http://localhost:3000/todos';

// 	const response = await fetch(fetchUrl);
// 	todoArray = await response.json();

// 	todoArray.map(todo => {
// 		const ul = document.createElement('ul');
// 		const li = document.createElement('li');
// 		li.classList.add('list-item');

// 		const pTag = document.createElement('p');
// 		pTag.classList.add('list-link');
// 		pTag.textContent = todo.title;

// 		const buttonEdit = document.createElement('a');
// 		buttonEdit.setAttribute('href', '#');

// 		buttonEdit.classList.add('list-button', 'ui-yell');
// 		buttonEdit.textContent = 'Edit';

// 		const deleteButton = document.createElement('button');
// 		deleteButton.setAttribute('class', 'deleteBtn');
// 		deleteButton.setAttribute('onclick', 'deleteTodo(event)');
// 		deleteButton.textContent = 'Delete';
// 		deleteButton.classList.add('list-button', 'ui-red');

// 		li.appendChild(pTag);
// 		li.appendChild(buttonEdit);
// 		li.appendChild(deleteButton);

// 		ul.appendChild(li);
// 		todoGroup.appendChild(ul);
// 	});
// };

// function createTodo(event) {
// 	event.preventDefault();

// 	const newTodo = {
// 		id: Math.floor(Math.random() * Math.floor(10000)),
// 		title: userInput.value,
// 		completed: false,
// 	};

// 	const postUrl = 'http://localhost:3000/todos';

//

// function deleteTodo(event) {
// 	let id = event;
// 	console.log(id)
// };
