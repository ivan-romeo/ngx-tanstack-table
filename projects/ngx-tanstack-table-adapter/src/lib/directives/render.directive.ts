import {Directive, Input, ElementRef, Renderer2, OnInit, inject} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[renderData]',

})
export class RenderDirective implements OnInit {
  @Input('renderData') render: any;
  @Input() props: any;
  private el = inject(ElementRef);
  private renderer = inject( Renderer2);

  ngOnInit(): void {
    this.transformHeader();
  }
  private transformHeader(): void {
    if (!this.render) {
      return;
    }
    let transformedValue = '';
    if (typeof this.render === 'string') {
      transformedValue = this.render;
    }
    if (typeof this.render === 'function') {
      transformedValue = this.render(this.props);
    }
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', transformedValue);
  }
}
