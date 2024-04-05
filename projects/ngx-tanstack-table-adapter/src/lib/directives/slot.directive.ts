import { TemplateRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[slotCol]',
  standalone:true,
})
export class SlotDirective {
    @Input({required:true,alias:'slotCol'}) fieldName!: string;
    @Input('slotValue') value!: any;

    constructor(public templateRef: TemplateRef<any>) {}
}
