export class Task{
    protected task:string;
    protected deadLine:string;
    constructor(task:string,deadline:string) {
        this.task=task;
        this.deadLine=deadline;
    }
}