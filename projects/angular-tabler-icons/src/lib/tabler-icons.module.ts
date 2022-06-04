import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { TablerIconComponent } from './tabler-icon.component';
import { OptionsProvider } from './options.provider';
import { OptionIcons, Options } from './options.interfaces';


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
    @Optional() private options: OptionsProvider
  ) {
    if ( !this.options ) {
      throw new Error(
        `No icon provided. Make sure to use 'TablerIconsModule.pick({ ... })' when importing the module\n` +
        `Refer to documentation on https://github.com/pierreavn/angular-tabler-icons`
      );
    }
  }

  /**
   * Initialize module with given icons and options
   * @param icons
   * @returns Module with options
   */
  static pick(icons: OptionIcons, options?: Options): ModuleWithProviders<TablerIconsModule> {
    return {
      ngModule: TablerIconsModule,
      providers: [
        {
          provide: OptionsProvider,
          useValue: {
            icons,
            ...options
          }
        }
      ]
    };
  }
}
