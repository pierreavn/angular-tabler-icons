import {
  Component,
  ElementRef,
  Input,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { OptionsProvider } from './options.provider';
import { uppercamelcase } from './utils';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'i-tabler, tabler-icon',
  templateUrl: './tabler-icon.component.html',
  styleUrls: ['./tabler-icon.component.scss'],
})
export class TablerIconComponent implements OnChanges {
  private elem = inject<ElementRef>(ElementRef);
  private changeDetector = inject<ChangeDetectorRef>(ChangeDetectorRef);
  private options = inject(OptionsProvider);

  @Input() name!: string;

  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign(
      {},
      ...this.options.map((option) => option.icons)
    );
    const svg = icons[`Icon${uppercamelcase(changes.name.currentValue)}`] ?? '';

    if (!svg && !this.options.some((option) => option.ignoreWarnings)) {
      console.warn(
        `Tabler Icon not found: ${changes.name.currentValue}\n` +
          `Refer to documentation on https://github.com/pierreavn/angular-tabler-icons`
      );
    }

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
