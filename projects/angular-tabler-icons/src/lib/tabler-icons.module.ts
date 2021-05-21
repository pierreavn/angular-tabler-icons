import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { TablerIconComponent } from './tabler-icon.component';
import { Icons } from './icons.provider';


@NgModule({
  declarations: [
    TablerIconComponent
  ],
  exports: [
    TablerIconComponent
  ]
})
export class TablerIconsModule {
  constructor(
    @Optional() private icons: Icons
  ) {
    if ( !this.icons ) {
      throw new Error(
        `No icon provided. Make sure to use 'TablerIconsModule.pick({ ... })' when importing the module\n` +
        `Refer to documentation on https://github.com/pierreavn/angular-tabler-icons`
      );
    }
  }

  static pick(icons: {[key: string]: string}): ModuleWithProviders<TablerIconsModule> {
    return {
      ngModule: TablerIconsModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons }
      ]
    };
  }
}
