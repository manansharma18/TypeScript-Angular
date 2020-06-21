import { TodoItem } from './todoItem';

export class ToDoList{
    constructor(public user: string, private todoItems: TodoItem[] = []){}

    get items(): readonly TodoItem[]{
        return this.todoItems;
    }
    addItem(task: string){
        this.todoItems.push(new TodoItem(task));
    }
}