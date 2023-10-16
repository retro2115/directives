import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
	private viewContainer: ViewContainerRef,
	private templateRef: TemplateRef<any>
  ) {
	
   }

}
