import { Component, ComponentFactoryResolver, ViewChild, ViewEncapsulation } from '@angular/core';
import { IUser } from '../../core/modules/user.interface';

/**
 * User Component and actions
 *
 * @export
 * @class UserComponent
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent {

  /**
   * Current selected user in the tasks menu
   *
   * @private
   * @type {IUser}
   * @memberof UserComponent
   */
  private currUser: IUser;

  /**
   * Creates an instance of UserComponent.
   * @memberof UserComponent
   */
  constructor() {
    this.currUser = {
      id: 1,
      name: 'Nasser Al-Assaly',
      phone: '+962788099161',
      email: 'nax.roma@gmail.com',
      imageUrl: './assets/img/nax.png'
    };
  }

  /**
   * Change the selected user in the tasks from the available users
   *
   * @private
   * @memberof UserComponent
   */
  private changeCurrentUser() {

  }

}
