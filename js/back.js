const url = 'http://localhost:3000/todos/';

window.onload = async () => {
    let = urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    if (id) {
        let response = await fetch(`${url}${id}`);
        let todo = await response.json();

        document.querySelector('#title').value = todo.title;
    }
}