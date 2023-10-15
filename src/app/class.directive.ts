import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
	@Input() set appClass(color: string) {
		this.element.nativeElement.style.backgroundColor = color;
	}

  constructor(private element: ElementRef) {
	
   }

}
