export class TodoItem{
    constructor(taskval: string,completeVal: boolean = false){
        this.taskval = taskval;
        this.completeVal = completeVal;
    }

    taskval: string;
    completeVal: boolean;


}