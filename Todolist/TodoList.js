window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        // Create task element and append it to the list
        const task_el = createTaskElement(task);
        list_el.appendChild(task_el);

        // Save the task in localStorage
        saveTaskToLocalStorage(task);
        
        // Clear the input field
        input.value = '';
    });

    // Load tasks from localStorage on page load
    loadTasksFromLocalStorage();

    function createTaskElement(task) {
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        // Attach event listeners for edit and delete actions
        attachEventListeners(task_el, task_input_el, task);

        return task_el;
    }

    function attachEventListeners(task_el, task_input_el, task) {
        const task_edit_el = task_el.querySelector('.edit');
        const task_delete_el = task_el.querySelector('.delete');

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");

                // Update localStorage when saving the edited task
                updateTaskInLocalStorage(task, task_input_el.value);
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            // Remove the task from localStorage
            removeTaskFromLocalStorage(task);
        });
    }

    function saveTaskToLocalStorage(task) {
        localStorage.setItem(task, task);
    }

    function updateTaskInLocalStorage(oldTask, newTask) {
        localStorage.setItem(newTask, newTask);
        localStorage.removeItem(oldTask);
    }

    function removeTaskFromLocalStorage(task) {
        localStorage.removeItem(task);
    }

    function loadTasksFromLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            const task = localStorage.key(i);
            const task_el = createTaskElement(task);
            list_el.appendChild(task_el);
        }
    }
});
