import { Component, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Options } from './options.interfaces';
import { OptionsProvider } from './options.provider';
import { uppercamelcase } from './utils';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'i-tabler, tabler-icon',
  templateUrl: './tabler-icon.component.html',
  styleUrls: [ './tabler-icon.component.scss' ],
})
export class TablerIconComponent implements OnChanges {
  @Input() name!: string;

  constructor(
    @Inject(ElementRef) private elem: ElementRef,
    @Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef,
    @Inject(OptionsProvider) private options: Options[]
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...this.options.map(option => option.icons));
    const svg = icons[`Icon${uppercamelcase(changes.name.currentValue)}`] ?? '';

    if (!svg && !this.options.some(option => option.ignoreWarnings)) {
      console.warn(
        `Tabler Icon not found: ${changes.name.currentValue}\n` +
        `Refer to documentation on https://github.com/pierreavn/angular-tabler-icons`
      );
    }

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
