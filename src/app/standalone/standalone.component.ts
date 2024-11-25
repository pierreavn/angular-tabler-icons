import { Component } from '@angular/core';
import { TablerIconComponent, provideTablerIcons } from 'angular-tabler-icons';
import {
  IconNumber123,
  IconAdOff,
  IconHeartFilled,
  IconGolfFilled,
} from 'angular-tabler-icons/icons';

@Component({
    selector: 'app-standalone',
    imports: [TablerIconComponent],
    providers: [
        /**
         * Provide the icons which you want to use in this component.
         */
        provideTablerIcons({
            IconNumber123,
            IconAdOff,
            IconHeartFilled,
            IconGolfFilled,
        }),
    ],
    template: `
    <h2>Standalone component sample</h2>

    <fieldset>
      <legend>123</legend>
      <i-tabler name="number-123"></i-tabler>
    </fieldset>

    <fieldset>
      <legend>123 (style, big)</legend>
      <i-tabler name="number-123" style="height: 60px; width: 60px;"></i-tabler>
    </fieldset>

    <fieldset>
      <legend>ad-off (style, red)</legend>
      <i-tabler name="ad-off" style="color: red;"></i-tabler>
    </fieldset>

    <fieldset>
      <legend>heart-filled (style, red)</legend>
      <i-tabler name="heart-filled" style="color: red;"></i-tabler>
    </fieldset>

    <fieldset>
      <legend>golf-filled (style, blue)</legend>
      <i-tabler name="golf-filled" style="color: blue;"></i-tabler>
    </fieldset>
  `
})
export class StandaloneComponent {}
