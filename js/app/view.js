'use strict';

function view () {
    const generateTodoTemplate = (data) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');
        wrapper.setAttribute('data-todo-id', data.id);
        wrapper.classList.add('data-todo-item');

        wrapper.innerHTML = `<div class="taskWrapper">
            <div class="data-inner-task-wrapper">
                <div class="taskHeading">${data.title}</div>
                <div class="taskDescription">${data.description}</div>
            </div>
            <button id="${data.id}" class="data-delete-btn"></button>
        </div>`;

        return wrapper;
    };

    return {
        form: null,
        todoContainer: null,

        clearForm() {
            this.form.reset();
        },

        addTodo(data) {
            const todoTemplate = generateTodoTemplate(data);
            this.todoContainer.append(todoTemplate);
        },

        addTodos(data) {
             data.forEach(item => this.addTodo(item));
        },

        removeTemplate() {
            event.stopPropagation();
            const todoItem = this.todoContainer.querySelector('.data-todo-item');

            todoItem.remove();
        },

        init(form, todoContainer) {
            this.form = form;
            this.todoContainer = todoContainer;
        }
    }
}