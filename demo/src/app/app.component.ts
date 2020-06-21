import { Component } from '@angular/core';
import {ToDoList} from './toDoList';
import { TodoItem } from './todoItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  private list = new ToDoList("Bob Marley",[
    new TodoItem("Go for Run",true),
    new TodoItem("Take out trash"),
    new TodoItem("Get flowers"),
    new TodoItem("sleep"),
    new TodoItem("wake up")
  ]);
  get username():string{return this.list.user;}

  get itemCount():number{
    return this.list.items.filter(item=>!item.completeVal).length;
  }

  get itemList(): readonly TodoItem[]{
    return this.list.items.filter(item=> this.showComplete || !item.completeVal);
  }

  addItem(task:string){
    if(task!=null){
    return this.list.addItem(task);
  }


}
showComplete:boolean = false;
}
