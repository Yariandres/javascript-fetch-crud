let id;
const url = 'http://localhost:3000/todos/';

const msgLoading = document.querySelector('.msgLoading');
const msgDelete = document.querySelector('.msgDeleted');

// fetching a single todo
window.onload = async () => {
	let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');

	try {
        let response = await fetch(`${url}${id}`);

        if(response.ok) {
            msgLoading.style.display = 'none';
        };

		let todo = await response.json();
		let element = document.createElement('p');
		element.innerHTML = `${todo.title}`;

		document.querySelector('#details').appendChild(element);
	} catch (error) {
		console.log(`Something went wrong: ${error}`);
	}
};

// deleting todo
const handleDelete = async () => {
	try {
		const response = await fetch(`${url}${id}`, {
			method: 'DELETE',
        });
        if(response.ok) {
            msgDelete.style.display = 'block';
            location.assign('/index.html');

        } else {
            alert('Something went wrong!');
        }
	} catch (err) {
		console.log(err);
	}
};

// Editing todo
const handleEdit = () => {
    location.href = `back.html?id=${id}`;
}
