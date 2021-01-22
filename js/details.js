let id;
const url = 'http://localhost:3000/todos/'

window.onload = async () => {
    let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
    
    try {
        let response = await fetch(`${url}${id}`);
        let todo = await response.json();

        let element = document.createElement('p');
        element.innerHTML = `${todo.title}`;

        document.querySelector('#details').appendChild(element);

    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}