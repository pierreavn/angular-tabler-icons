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
      <tabler-icon name="number-123"></tabler-icon>
    </fieldset>

    <fieldset>
      <legend>123 (style, big)</legend>
      <tabler-icon
        name="number-123"
        style="height: 60px; width: 60px;"
      ></tabler-icon>
    </fieldset>

    <fieldset>
      <legend>ad-off (style, red)</legend>
      <tabler-icon name="ad-off" style="color: red;"></tabler-icon>
    </fieldset>

    <fieldset>
      <legend>heart-filled (style, red)</legend>
      <tabler-icon name="heart-filled" style="color: red;"></tabler-icon>
    </fieldset>

    <fieldset>
      <legend>golf-filled (style, blue)</legend>
      <tabler-icon name="golf-filled" style="color: blue;"></tabler-icon>
    </fieldset>
  `,
})
export class StandaloneComponent {}
