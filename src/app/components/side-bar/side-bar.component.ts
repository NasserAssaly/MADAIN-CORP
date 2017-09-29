import { Component, ComponentFactoryResolver, ViewChild, ViewEncapsulation } from '@angular/core';

/**
 * Container For the Tasks and Users
 *
 * @export
 * @class SidebarComponent
 * @author Naser Assaly
 */
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  constructor() { }

}
