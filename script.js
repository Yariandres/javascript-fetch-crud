function fetchTodos() {
	fetch('http://localhost:3000/todos')
		.then(resp => resp.json())
		.then(renderTodos);
}

const todoCollection = document.getElementById('todo-collection');

function renderTodos(todos) {
	todoCollection.innerHTML = '';

	todos.forEach(function (todo) {
		todoCollection.innerHTML += `
			<div class="card" data-id="${todo.id}">
				<h2>${todo.title}</h2>
				<button class="btn btn-edit">edit</button>
				<button type="button" class="btn btn-delete">Delete</button>
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
			completed: false,
		}),
	})
		.then(resp => resp.json())
		.then(renderTodos)
		.catch(err => console.log(err));
});

todoCollection.addEventListener('click', function (event) {

	let deleteButton = event.target.className === 'btn btn-delete';

	if (deleteButton) {
		let id = event.target.parentElement.dataset.id;

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(fetchTodos);
	}
});

fetchTodos();
