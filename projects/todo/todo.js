function get_tasks() {
    var tasks = new Array;
    var tasks_str = localStorage.getItem('tasks');
    if (tasks_str !== null) {
        tasks = JSON.parse(tasks_str);
    }
    return tasks;
}

function add() {
    var task = document.getElementById('new-task').value;
    if (task !== "") {
        var tasks = get_tasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        show();
    }
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var tasks = get_tasks();
    tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    show();
    return false;
}

function show() {
    var tasks = get_tasks();
    var html = '<ul>';
    for (var i = tasks.length - 1; i >= 0; i--) {
        html += '<li>' + '<input type="checkbox" class="remove" id="' + i + '">'
            + '<span>' + tasks[i] + '</span>' + '</li>';
    }
    ;
    html += '</ul>';

    document.getElementById('tasks').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
    ;
}

document.getElementById('add').addEventListener('click', add);
show();