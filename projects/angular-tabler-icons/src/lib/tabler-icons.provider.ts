import { OptionIcons, Options } from './options.interfaces';
import { OPTIONS_TOKEN } from './options.provider';
import { Provider } from '@angular/core';

export function provideTablerIcons(
  icons: OptionIcons,
  options?: Options
): Provider[] {
  return [
    {
      provide: OPTIONS_TOKEN,
      useValue: {
        icons,
        ...options,
      },
      multi: true,
    },
  ];
}
