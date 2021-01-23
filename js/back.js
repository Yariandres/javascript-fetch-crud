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

const handleSubmit = (event) => {
    event.preventDefault();
    submitTodo();  
}

const submitTodo = async () => {
    let = urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    const submitMsg = document.querySelector('.submitMsg');
    let sendAlert = document.querySelector('.sendAlert');
    sendAlert.style.display = 'block';

    let myTodo = {
        id: Math.floor(Math.random() * Math.floor(10000)),
        title: document.querySelector('#title').value,
        completed: false
    };
    
    try {        
        let response;

        if (id) {
            response = await fetch(`${url}${id}`, {
                method: 'PUT',
                body: JSON.stringify(myTodo),
                headers: new Headers({ 
                        'Content-Type': 'application/json'
                    })
            });
        } else {
            response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(myTodo),
                headers: new Headers({ 'Content-Type': 'application/json'})
            });
        }

        if (response.ok) {
            sendAlert.style.display = 'none';

            submitMsg.innerHTML = `Todo ${id ? 'Updated!' : 'Created!'}`;
            location.assign('/index.html');

        } else {
            sendAlert.style.display = 'none';
            submitMsg.innerHTML = `Somthing went wrong, try again...`;
        }

    } catch (error) {
        console.log('error:', error)
    }
}
