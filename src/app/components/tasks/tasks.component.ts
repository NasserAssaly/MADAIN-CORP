import { Component, ComponentFactoryResolver, ViewChild, ViewEncapsulation } from '@angular/core';
import { IUser } from '../../core/modules/user.interface';
import { ITask } from '../../core/modules/task.interface';
import { Http } from '@angular/http';

/**
 * Conatiner for the tasks
 * @export
 * @class TasksComponent
 * @author Naser Assaly
 */
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent {

  private tasksList: Array<ITask>;

  /**
   * Creates an instance of TasksComponent.
   *
   * @memberof TasksComponent
   */
  constructor(private http: Http) {
    this.fillTasksList();
  }

  /**
   *  Fills the list with the available tasks
   *
   * @private
   * @memberof TasksComponent
   */
  public fillTasksList() {
    return this.http.get("./assets/data/tasks.json").subscribe(res => {
      this.tasksList = res.json().tasks;
    }, err => {
      console.log(err);
    });
  }

  /**
   *  return the style of task by status
   *
   * @private
   * @memberof TasksComponent
   */
  public getStatusDiv(task: ITask): string {
    let res = "div-task-status";

    switch (task.status) {
      case 1:
        res += "blue";
        break;
      case 2:
        res += "red";
        break;
      case 3:
        res += "green";
        break;
    }
    return res;
  }

}
