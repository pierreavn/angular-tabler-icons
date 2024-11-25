import { InjectionToken } from '@angular/core';
import { Options } from './options.interfaces';

export const OPTIONS_TOKEN = new InjectionToken<Options[]>('OPTIONS_TOKEN');

export class OptionsProvider {
  constructor(private options: Options[]) {}
}
