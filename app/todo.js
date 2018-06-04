var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
        this.counter = 0;
        this.id = this.counter;
        this.counter++;
    }
    Task.deleteall = function () {
        Task.tasks = [];
    };
    Task.prototype.markDone = function () {
        this.done = true;
    };
    Task["delete"] = function (id) {
        var i = 0;
        for (var _i = 0, _a = Task.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.id == id) {
                Task.tasks.splice(i, 1);
            }
            i++;
        }
    };
    Task.prototype.saveTask = function () {
        Task.tasks.push(this);
    };
    Task.tasks = [];
    return Task;
}());
document.getElementById('addtask').addEventListener('click', function () {
    document.getElementsByClassName("output")[0].innerHTML = "";
    var inputTask = document.getElementById("todo").value;
    var inputPriority = document.getElementById("priority").value;
    var newTask = new Task(inputTask, inputPriority);
    newTask.saveTask();
    console.log(newTask);
    console.log(Task.tasks);
    var i = 0;
    for (var task in Task.tasks) {
        var node = document.createElement("DIV");
        var textnode = document.createTextNode(Task.tasks[i].description);
        var button = document.createElement("span");
        button.setAttribute("class", "btn btn-primary");
        var buttonNode = document.createTextNode("delete");
        node.appendChild(textnode);
        button.appendChild(buttonNode);
        document.getElementsByClassName("output")[0].appendChild(node);
        // document.getElementsByClassName("btn").last().appendChild(button);
        document.getElementsByClassName("output")[0].appendChild(button);
        i++;
    }
});
