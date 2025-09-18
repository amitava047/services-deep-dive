import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TaskService } from './app/tasks/tasks.service';
// import { TaskService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//     providers: [TaskService]
// }).catch((err) => console.error(err));

// export const TasksServiceToken = new InjectionToken<TaskService>('tasks-service-token');

// bootstrapApplication(AppComponent, {
//     providers: [{ provide: TasksServiceToken, useClass: TaskService }]
// }).catch((error) => console.error(error));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
