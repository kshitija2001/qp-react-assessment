export interface ITaskData {
id:number
title : string
dueDate: string
status: ETaskStatus
}

export interface IToDoList {
    toDoList : ITaskData []
}

export enum ETaskStatus{
COMPLETED ="COMPLETED",
NOT_COMPLETED ="NOT COMPLETED"
}

export const ADD_TASK ="ADD TASK"