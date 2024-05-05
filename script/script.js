
const fetchTodos = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json()) 
        .then(todos => resolve(todos)) 
        .catch(error => reject(error)); 
});


fetchTodos.then(todos => {
    
    const completedTodos = todos.filter(todo => todo.completed);

    
    let checkedCount = completedTodos.length;

   
    const todoList = document.getElementById('todo-list');
    todos.forEach(todo => {
        
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input';
        listItem.appendChild(checkbox);

        listItem.appendChild(document.createTextNode(todo.title));
        if (todo.completed) {
            
            listItem.classList.add('completed');
            checkbox.checked = true;
            checkbox.disabled = true;
        }
        
        checkbox.addEventListener('change', function() {
            if (this.checked) {

                checkedCount++;
            } else {
                
                checkedCount--;
            }
          
            if (checkedCount === completedTodos.length + 5) {

                alert(`Congrats. 5 Tasks have been Successfully Completed`);
            }
        });
       
        todoList.appendChild(listItem);
    });
}).catch(error => console.error('Error fetching todos:', error));




