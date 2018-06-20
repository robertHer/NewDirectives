import { Directive, ElementRef, OnInit , OnDestroy} from "@angular/core";

@Directive({
    selector: '[basicHighlight]'
})

export class BasicHighlightDirective{
    constructor(private elementRef: ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
   }

   ngOnDestroy(){

   }
}