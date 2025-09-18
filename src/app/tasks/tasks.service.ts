import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();

    addTasks(taskData: {title: string; description: string}) {
        const newTask: Task = {
            id: Math.random().toString(),
            ...taskData,
            status: 'OPEN'
        };
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    }
}