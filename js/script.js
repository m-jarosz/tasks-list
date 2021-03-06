{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleDoneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            })
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDoneTask(taskIndex);
            })
        })
    }

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li${task.done ? " class = \"list__taskItem list__taskItem--done\"" : "list__taskItem"}>
                <div class = "list__doneContainer js-done"></div>
                ${task.content}
                <button class = "js-remove">Usuń</button>
                </li>
            `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString;
        bindEvents();        
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-inputTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    }

    const init = () => {

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", () => {
            onFormSubmit(event);
            form.reset();
        });

    }

    init();
}