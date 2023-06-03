import { Component } from '@angular/core';
import { TablerIconsModule, TablerIconsProvider } from 'angular-tabler-icons';
import { Icon123, IconAdOff } from 'angular-tabler-icons/icons';


@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  standalone: true,
  imports: [
    TablerIconsModule,
  ],
  providers: [
    TablerIconsProvider.pick({
      Icon123,
      IconAdOff
    })
  ]
})
export class StandaloneComponent {
}
