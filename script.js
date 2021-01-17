// DOM selectors
const todoGroup = document.querySelector('.todo-group');
const userInput = document.querySelector('.user-input');
const postButton = document.querySelector('.btn-submit');

// Event listeners
postButton.addEventListener('click', createTodo);

window.onload = async function () {
	const fetchUrl = 'http://localhost:3000/todos';

	const response = await fetch(fetchUrl);
	const data = await response.json();

	const todos = data;

	todos.map(todo => {
		const ul = document.createElement('ul');
		const li = document.createElement('li');
		li.classList.add('list-item');

		const pTag = document.createElement('p');
		pTag.classList.add('list-link');
		pTag.textContent = todo.title;

		const buttonEdit = document.createElement('a');
		buttonEdit.setAttribute('href', '#');
		buttonEdit.classList.add('list-button', 'ui-yell');
		buttonEdit.textContent = 'Edit';

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('list-button', 'ui-red');

		li.appendChild(pTag);
		li.appendChild(buttonEdit);
		li.appendChild(deleteButton);

		ul.appendChild(li);
		todoGroup.appendChild(ul);
	});
};

function createTodo(event) {
	event.preventDefault();

	const newTodo = {
		id: 6,
		title: userInput.value,
		completed: false,
	};

	const postUrl = 'http://localhost:3000/todos';

	fetch(postUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTodo),
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			}
		})
		.then(() => console.log(response))
		.catch(err => console.log(err));
}
