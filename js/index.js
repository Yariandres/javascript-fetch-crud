window.onload = async () => {
    const url = 'http://localhost:3000/todos';
    let currentEvents = document.querySelector('#currentTodos');

    try {
        let response = await fetch(url);
        let todos = await response.json();


        if(todos.length > 0) {
            todos.forEach(todo => {
            
                let listItem = document.createElement('li');
                listItem.classList.add('listItem');
                listItem.innerHTML = `
                    <span>${todo.title}</span>
                    <span>${todo.completed}</span>
                    <span>
                        <a href="details.html?id=${todo.id}">View details</a>
                    </span>
                `;
                currentEvents.appendChild(listItem)
            }) 
        } else {
            currentEvents.innerHTML = 'No planned todos...'
        }
    } catch (error) {
        console.log(error)
    }
}