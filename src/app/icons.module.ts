import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconCameraFilled, IconHeart, IconHeartFilled, IconBrandGithub } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconCameraFilled,
  IconHeart,
  IconHeartFilled,
  IconBrandGithub
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
