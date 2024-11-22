import {
  Component,
  ElementRef,
  inject,
  ChangeDetectionStrategy,
  input,
  linkedSignal,
  untracked,
  effect,
} from '@angular/core';
import { OPTIONS_TOKEN } from './options.provider';
import { upperCamelCase } from './utils';

/**
 * A component that renders Tabler icons as SVG elements.
 *
 * This component takes an icon name as input and renders the corresponding SVG icon
 * by injecting it into the DOM. It supports multiple icon sets through an options token
 * and provides warnings when icons are not found.
 *
 * @example
 * ```html
 * <tabler-icon name="user"></tabler-icon>
 * ```
 *
 * @remarks
 * The component uses Angular's dependency injection to get ElementRef and options.
 * Icons are rendered using innerHTML after being retrieved from the configured icon sets.
 * Warning messages are logged to the console when icons are not found (unless warnings are ignored in options).
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'i-tabler, tabler-icon',
  template: `<ng-content />`,
  styles: `
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablerIconComponent {
  readonly #elem = inject<ElementRef>(ElementRef);
  readonly #options = inject(OPTIONS_TOKEN);

  /**
   * Icon name in kebab-case format.
   * @example
   * - "user"
   * - "heart-filled"
   * - "camera-off"
   * - "brand-github"
   * etc
   */
  readonly name = input.required<string>();

  readonly #svg = linkedSignal<string>(() => this.#getSvgIcon(this.name()));

  setNativeSvg = effect(() => {
    const svg = this.#svg();
    if (!svg) {
      return;
    }

    // Set innerHTML to render SVG
    untracked(() => {
      this.#elem.nativeElement.innerHTML = svg;
    });
  });

  /**
   * Retrieves the SVG markup for a given icon name from the configured icon sets.
   *
   * @param iconName - The name of the icon to retrieve in kebab-case format
   * @returns The SVG markup string for the icon, or an empty string if not found
   *
   * @remarks
   * This method:
   * - Merges all icon sets from the configured options
   * - Converts the icon name to upper camel case and prepends "Icon"
   * - Returns empty string if icon name is undefined
   * - Logs a warning if icon is not found (unless warnings are ignored in options)
   */
  #getSvgIcon(iconName: string | undefined) {
    // Merge all icon sets from options
    const icons = Object.assign(
      {},
      ...this.#options.map((option) => option.icons)
    );

    if (!iconName) {
      return '';
    }

    const icon = `Icon${upperCamelCase(iconName)}`;

    // Use optional chaining and nullish coalescing for safer property access
    const svg = icons?.[icon] ?? '';

    if (!svg && !this.#options.some((option) => option.ignoreWarnings)) {
      console.warn(
        `Tabler Icon not found: ${iconName}\n
         Refer to documentation on https://github.com/pierreavn/angular-tabler-icons`
      );
    }

    return svg;
  }
}
