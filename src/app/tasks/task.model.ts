import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type taskStatusOptions = {
  value: 'open' | 'in-progress' | 'done',
  status: TaskStatus,
  text: string
}[];

export const TaskStatusOptions: taskStatusOptions = [
  {
    value: 'open',
    status: 'OPEN',
    text: 'Open'
  },
  {
    value: 'in-progress',
    status: 'IN_PROGRESS',
    text: 'In-Progress'
  },
  {
    value: 'done',
    status: 'DONE',
    text: 'Completed'
  }
];

export const TASK_STATUS_OPTIONS = new InjectionToken<taskStatusOptions>('task-status-options');

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
