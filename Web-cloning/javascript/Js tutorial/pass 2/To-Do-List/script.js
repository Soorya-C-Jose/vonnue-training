const todoList = [{
    name:'make dinner',
    dueDate:'2022-12-22'
 }, {
    name:'wash cloths',
    dueDate: '2022-12-24'
 }, {
    name: 'watching movies',
    dueDate: '2022-12-20'
 }];

renderTodoList()
function renderTodoList() {

    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];

        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
    <p>
    ${name} ${dueDate}
    <button onclick = "todoList.splice(${i},1);
    renderTodoList();
    ">Delete</button>
    </p>`
        todoListHTML += html;
    }


    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.getElementById('js-name-input')
const input = inputElement.value


    const dateInputElement = document.getElementById('js-due-date')
    const dueDate = dateInputElement.value
   console.log(dateInputElement)
    

    todoList.push({
        input,
        dueDate
    })

    console.log(todoList)
    inputElement.value = ''
    renderTodoList()
}