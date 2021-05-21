import { Component, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Icons } from './icons.provider';
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
    @Inject(Icons) private icons: Icons
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svg = icons[ "Icon" + uppercamelcase(changes.name.currentValue) ] || '';

    if (!svg) {
      console.warn(
        `Tabler Icon not found: ${changes.name.currentValue}\n` +
        `Refer to documentation on https://github.com/pierreavn/angular-tabler-icons`
      );
    }

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
