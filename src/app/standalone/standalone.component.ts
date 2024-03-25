import { Component } from '@angular/core';
import { TablerIconsModule, TablerIconsProvider } from 'angular-tabler-icons';
import { IconNumber123, IconAdOff, IconHeartFilled } from 'angular-tabler-icons/icons';


@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  standalone: true,
  imports: [
    TablerIconsModule,
  ],
  providers: [
    TablerIconsProvider.pick({
      IconNumber123,
      IconAdOff,
      IconHeartFilled
    })
  ]
})
export class StandaloneComponent {
}
