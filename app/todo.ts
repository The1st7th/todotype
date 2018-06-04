
class Task {
    done: boolean = false;
    static tasks: Task[] = [];
    id:number; 
    static counter: number = 0;
    
    constructor(public description: string, public priority: string){
      this.id = Task.counter;
      Task.counter++;
    }

    public static deleteall(){
    Task.tasks = [];
    }
  
    markDone(){
      this.done =  true;
    }
    public static delete(id:number){
      var i = 0;
      for(var task of Task.tasks) {
      if(task.id == id){
      Task.tasks.splice(i, 1);
      }
      i++;
      }
      }
    saveTask(){
      Task.tasks.push(this);
    }
}

document.getElementById('addtask').addEventListener('click',function(){
  document.getElementsByClassName("output")[0].innerHTML="";
  let inputTask: string = (<HTMLInputElement>document.getElementById("todo")).value;
  let inputPriority: string = (<HTMLInputElement>document.getElementById("priority")).value;
  let newTask = new Task(inputTask, inputPriority);
  newTask.saveTask();
  console.log(newTask);
  console.log(Task.tasks);
  var i: number = 0;
  for (var task of Task.tasks){
    var node = document.createElement("DIV");
    var textnode = document.createTextNode(task.description);
    var button = document.createElement("span");
    button.setAttribute("class","btn btn-primary");
    var buttonNode = document.createTextNode("delete");
    var idn:string = task.id.toString();
    button.setAttribute("id", task.id.toString())
    node.appendChild(textnode);
    button.appendChild(buttonNode);
    document.getElementsByClassName("output")[0].appendChild(node);
    // document.getElementsByClassName("btn").last().appendChild(button);
    document.getElementsByClassName("output")[0].appendChild(button);
    i++;
  }
})




  
