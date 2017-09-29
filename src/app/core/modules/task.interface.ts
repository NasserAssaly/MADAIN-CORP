
export interface ITask {
    id: number;
    name: string;
    description: string;
    status: TASK_STATUS;
}
export enum TASK_STATUS {
    normal = 1,
    danger = 2,
    small = 3
}