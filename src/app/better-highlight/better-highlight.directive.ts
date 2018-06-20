import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[BetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

   }

   ngOnInit(){
    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue' );
   }

  //  @HostListener('mouseenter') mouseEnter(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue' ); 

  //  }
  //  @HostListener('mouseleave') mouseOut(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent' );
  //  }
  
   @HostBinding('style.backgroundColor' ) backgroundColor:string = 'transparent';
   @HostBinding('style.color') color:string = 'white'
 
    @HostListener('mouseenter') mouseEnter(){
     this.backgroundColor = 'skyblue'
 
    }
    @HostListener('mouseleave') mouseOut(){
    this.backgroundColor = 'transparent'
    }
  }


