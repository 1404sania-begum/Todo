    const todoList=[
    //     {
    //     name : 'makes dinner',
    //     dueDate : '2022-12-12'
    // },
    // {
    //        name : 'makes Lunch',
    //         dueDate : '2022-12-12'
    // }
];

    renderTodoList();
    function renderTodoList()
    {
        let todoListHTML = '';
        
        
        for(let i=0; i<todoList.length;i++){
            const todoObject = todoList[i];
            const {name,dueDate} = todoObject;
            const html = `
                <div class="div-input">${name}</div>
                <div class="div-input"> ${dueDate}</div>
                <button class ="delete-todo-button  js-delete-todo-button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yDVmnjALftIAYwGsRo41C-RjDWChWCU1-g&usqp=CAU"></button>
               `;
            todoListHTML += html; 
        }
        
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
        
       document.querySelectorAll('.js-delete-todo-button')
       .forEach((deleteButton,index) => {
            deleteButton.addEventListener('click',() => {
                todoList.splice(index,1);
                renderTodoList();     
            });
       });
    }
 
    document.querySelector('.js-add-todo-button').addEventListener('click',() => {
        addTodo();
    });

    function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name ,
        dueDate
    });
    inputElement.value = '';

    renderTodoList();        
}

