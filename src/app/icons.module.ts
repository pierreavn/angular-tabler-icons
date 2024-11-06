import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import {
  IconCamera,
  IconCameraFilled,
  IconHeart,
  IconHeartFilled,
  IconBrandGithub,
} from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const ICONS = {
  IconCamera,
  IconCameraFilled,
  IconHeart,
  IconHeartFilled,
  IconBrandGithub,
} as const;

@NgModule({
  imports: [TablerIconsModule.pick(ICONS)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
