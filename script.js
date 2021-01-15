// DOM selectors
const todoGroup = document.querySelector('.todo-group');

// Event listeners

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

console.log(todoGroup);
