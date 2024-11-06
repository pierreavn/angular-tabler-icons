import {
  Component,
  ElementRef,
  Input,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { OPTIONS_TOKEN } from './options.provider';
import { uppercamelcase } from './utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'i-tabler, tabler-icon',
  standalone: true,
  templateUrl: './tabler-icon.component.html',
  styleUrls: ['./tabler-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablerIconComponent implements OnChanges {
  private elem = inject<ElementRef>(ElementRef);
  private changeDetector = inject<ChangeDetectorRef>(ChangeDetectorRef);
  private options = inject(OPTIONS_TOKEN);

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
