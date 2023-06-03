import { Provider } from '@angular/core';
import { OptionIcons, Options } from './options.interfaces';
import { OptionsProvider } from './options.provider';

export class TablerIconsProvider {
  public static pick(icons: OptionIcons, options?: Options): Provider {
    return {
      provide: OptionsProvider,
      useValue: {
        icons,
        ...options
      },
      multi: true
    };
  }
}
